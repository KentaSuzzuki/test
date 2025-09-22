import React from 'react';
import styled from 'styled-components';
import { useWallet } from '../contexts/WalletContext';

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
`;

const DisconnectButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  
  &:hover {
    background: #dc2626;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const WalletInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  flex-wrap: wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const WalletDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const WalletName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
`;

const WalletAddress = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-family: 'Courier New', monospace;
`;

const WalletIcon = styled.div`
  font-size: 24px;
`;

const getWalletIcon = (walletId) => {
  const icons = {
    metamask: '🦊',
    walletconnect: '🔗',
    near: '🌐',
    coinbase: '🔷',
    phantom: '👻',
    trustwallet: '🛡️',
    binancewallet: '🟡',
    solflare: '☀️',
    rainbow: '🌈',
  };
  return icons[walletId] || '🔗';
};

const getWalletName = (walletId) => {
  const names = {
    metamask: 'MetaMask',
    walletconnect: 'WalletConnect',
    near: 'NEAR Wallet',
    coinbase: 'Coinbase Wallet',
    phantom: 'Phantom',
    trustwallet: 'Trust Wallet',
    binancewallet: 'Binance Chain Wallet',
    solflare: 'Solflare',
    rainbow: 'Rainbow',
  };
  return names[walletId] || 'Wallet';
};

const truncateAddress = (address, startLength = 6, endLength = 4) => {
  if (!address) return '';
  if (address.length <= startLength + endLength) return address;
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

const ConnectWalletButton = () => {
  const { 
    isConnected, 
    walletId, 
    walletAddress, 
    openWalletModal, 
    disconnectWallet,
  } = useWallet();

  if (isConnected && walletId && walletAddress) {
    return (
      <WalletInfo>
        <WalletIcon>{getWalletIcon(walletId)}</WalletIcon>
        <WalletDetails>
          <WalletName>{getWalletName(walletId)}</WalletName>
          <WalletAddress>{truncateAddress(walletAddress)}</WalletAddress>
        </WalletDetails>
        <ButtonGroup>
          <DisconnectButton onClick={disconnectWallet}>
            Disconnect
          </DisconnectButton>
        </ButtonGroup>
      </WalletInfo>
    );
  }

  return (
    <Button onClick={openWalletModal}>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;

