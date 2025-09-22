import React, { useState } from 'react';
import styled from 'styled-components';
import { useWallet } from '../contexts/WalletContext';
import { getAvailableWallets } from '../utils/walletConnectors';
import { 
  connectToMetaMask, 
  connectToCoinbaseWallet, 
  connectToPhantom, 
  connectToTrustWallet, 
  connectToBinanceWallet, 
  connectToSolflare, 
  connectToRainbow, 
  connectToWalletConnect, 
  connectToNEARWallet 
} from '../utils/individualWalletFunctions';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 60vh;
  overflow-y: auto;
`;

const CategoryHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 16px 0 8px 0;
  padding: 8px 0;
  border-bottom: 2px solid #e5e7eb;
  
  &:first-child {
    margin-top: 0;
  }
`;

const WalletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

const WalletOption = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;

  &:hover {
    border-color: #3b82f6;
    background-color: #f8fafc;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      border-color: #e5e7eb;
      background-color: white;
    }
  }
`;

const WalletIcon = styled.div`
  font-size: 32px;
  margin-right: 16px;
`;

const WalletInfo = styled.div`
  flex: 1;
`;

const WalletName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const WalletDescription = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-left: 12px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const WalletModal = () => {
  const { isModalOpen, closeWalletModal, connectWallet } = useWallet();
  const [loadingWallet, setLoadingWallet] = useState(null);
  const [error, setError] = useState(null);
  
  const allWallets = getAvailableWallets();
  
  const walletsByCategory = allWallets.reduce((acc, wallet) => {
    const category = wallet.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(wallet);
    return acc;
  }, {});
  
  const categoryNames = {
    ethereum: 'Ethereum Wallets',
    solana: 'Solana Wallets',
    binance: 'Binance Smart Chain',
    polygon: 'Polygon Wallets',
    avalanche: 'Avalanche Wallets',
    near: 'NEAR Protocol',
    cosmos: 'Cosmos Wallets',
    terra: 'Terra Wallets',
    hardware: 'Hardware Wallets',
    mobile: 'Mobile Wallets',
    multi: 'Multi-Chain Wallets',
    other: 'Other Wallets'
  };

  const handleWalletSelect = async (wallet) => {
    setLoadingWallet(wallet.id);
    setError(null);

    try {
      let result;
      
      switch (wallet.id) {
        case 'metamask':
          result = await connectToMetaMask();
          break;
        case 'coinbase':
          result = await connectToCoinbaseWallet();
          break;
        case 'phantom':
          result = await connectToPhantom();
          break;
        case 'trustwallet':
          result = await connectToTrustWallet();
          break;
        case 'binancewallet':
          result = await connectToBinanceWallet();
          break;
        case 'solflare':
          result = await connectToSolflare();
          break;
        case 'rainbow':
          result = await connectToRainbow();
          break;
        case 'walletconnect':
          result = await connectToWalletConnect();
          break;
        case 'near':
          result = await connectToNEARWallet();
          break;
        default:
          throw new Error(`Unsupported wallet: ${wallet.id}`);
      }
      
      if (result && result.success) {
        const contextResult = await connectWallet(result.walletId);
        if (!contextResult.success) {
          setError(contextResult.error || 'Failed to save wallet connection');
        }
      } else {
        setError(result?.error || 'Failed to connect wallet');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoadingWallet(null);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeWalletModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Connect Wallet</ModalTitle>
          <CloseButton onClick={closeWalletModal}>×</CloseButton>
        </ModalHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <WalletList>
          {Object.entries(walletsByCategory).map(([category, wallets]) => (
            <div key={category}>
              <CategoryHeader>{categoryNames[category] || category}</CategoryHeader>
              <WalletGrid>
                {wallets.map((wallet) => (
                  <WalletOption
                    key={wallet.id}
                    onClick={() => handleWalletSelect(wallet)}
                    disabled={loadingWallet === wallet.id}
                  >
                    <WalletIcon>{wallet.icon}</WalletIcon>
                    <WalletInfo>
                      <WalletName>{wallet.name}</WalletName>
                      <WalletDescription>
                        {wallet.category === 'ethereum' && 'Ethereum-compatible wallet'}
                        {wallet.category === 'solana' && 'Solana blockchain wallet'}
                        {wallet.category === 'binance' && 'Binance Smart Chain wallet'}
                        {wallet.category === 'polygon' && 'Polygon network wallet'}
                        {wallet.category === 'avalanche' && 'Avalanche network wallet'}
                        {wallet.category === 'near' && 'NEAR Protocol wallet'}
                        {wallet.category === 'cosmos' && 'Cosmos ecosystem wallet'}
                        {wallet.category === 'terra' && 'Terra blockchain wallet'}
                        {wallet.category === 'hardware' && 'Hardware wallet (requires setup)'}
                        {wallet.category === 'mobile' && 'Mobile wallet connection'}
                        {wallet.category === 'multi' && 'Multi-chain wallet support'}
                        {!wallet.category && 'Cryptocurrency wallet'}
                      </WalletDescription>
                    </WalletInfo>
                    {loadingWallet === wallet.id && <LoadingSpinner />}
                  </WalletOption>
                ))}
              </WalletGrid>
            </div>
          ))}
        </WalletList>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WalletModal;

