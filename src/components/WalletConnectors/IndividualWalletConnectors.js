import React from 'react';
import styled from 'styled-components';
import { connectMetaMask, connectCoinbaseWallet, connectPhantom, connectTrustWallet, connectBinanceWallet, connectSolflare, connectRainbow, connectWalletConnect, connectNEAR } from '../../utils/walletConnectionService';

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
  margin-bottom: 12px;

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

export const MetaMaskConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectMetaMask();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🦊</WalletIcon>
      <WalletInfo>
        <WalletName>MetaMask</WalletName>
        <WalletDescription>Connect using MetaMask browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

// Coinbase Wallet Connector Component
export const CoinbaseConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectCoinbaseWallet();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🔷</WalletIcon>
      <WalletInfo>
        <WalletName>Coinbase Wallet</WalletName>
        <WalletDescription>Connect using Coinbase Wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

export const PhantomConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectPhantom();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>👻</WalletIcon>
      <WalletInfo>
        <WalletName>Phantom</WalletName>
        <WalletDescription>Connect using Phantom Solana wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

// Trust Wallet Connector Component
export const TrustWalletConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectTrustWallet();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🛡️</WalletIcon>
      <WalletInfo>
        <WalletName>Trust Wallet</WalletName>
        <WalletDescription>Connect using Trust Wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

// Binance Chain Wallet Connector Component
export const BinanceWalletConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectBinanceWallet();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🟡</WalletIcon>
      <WalletInfo>
        <WalletName>Binance Chain Wallet</WalletName>
        <WalletDescription>Connect using Binance Chain Wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

export const SolflareConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectSolflare();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>☀️</WalletIcon>
      <WalletInfo>
        <WalletName>Solflare</WalletName>
        <WalletDescription>Connect using Solflare Solana wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

export const RainbowConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectRainbow();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🌈</WalletIcon>
      <WalletInfo>
        <WalletName>Rainbow</WalletName>
        <WalletDescription>Connect using Rainbow wallet browser extension</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

export const WalletConnectConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectWalletConnect();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🔗</WalletIcon>
      <WalletInfo>
        <WalletName>WalletConnect</WalletName>
        <WalletDescription>Connect using WalletConnect protocol (requires setup)</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};

export const NEARWalletConnector = ({ onConnect, onError, isLoading }) => {
  const handleConnect = async () => {
    try {
      const result = await connectNEAR();
      onConnect(result);
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <WalletButton onClick={handleConnect} disabled={isLoading}>
      <WalletIcon>🌐</WalletIcon>
      <WalletInfo>
        <WalletName>NEAR Wallet</WalletName>
        <WalletDescription>Connect using NEAR Protocol wallet (requires setup)</WalletDescription>
      </WalletInfo>
      {isLoading && <LoadingSpinner />}
    </WalletButton>
  );
};
