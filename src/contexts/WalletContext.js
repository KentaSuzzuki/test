import React, { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '../utils/walletConnectionService';
import { burnWalletAndGoHome, burnWalletAndShowSelection, emergencyWalletBurn } from '../utils/walletBurnService';

const WalletContext = createContext();

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }) => {
  const [walletId, setWalletId] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletProvider, setWalletProvider] = useState(null);

  // Load wallet data from localStorage on component mount
  useEffect(() => {
    const savedWalletId = localStorage.getItem('walletId');
    const savedWalletAddress = localStorage.getItem('walletAddress');
    const savedIsConnected = localStorage.getItem('isConnected') === 'true';

    if (savedWalletId && savedWalletAddress && savedIsConnected) {
      setWalletId(savedWalletId);
      setWalletAddress(savedWalletAddress);
      setIsConnected(true);
    }
  }, []);

  // Save wallet data to localStorage whenever it changes
  useEffect(() => {
    if (walletId && walletAddress && isConnected) {
      localStorage.setItem('walletId', walletId);
      localStorage.setItem('walletAddress', walletAddress);
      localStorage.setItem('isConnected', 'true');
    } else {
      localStorage.removeItem('walletId');
      localStorage.removeItem('walletAddress');
      localStorage.removeItem('isConnected');
    }
  }, [walletId, walletAddress, isConnected]);

  const connectWalletHandler = async (selectedWalletId) => {
    try {
      setIsModalOpen(false);
      
      // Use the real wallet connection service
      const result = await connectWallet(selectedWalletId);
      
      if (result.success) {
        setWalletId(selectedWalletId);
        setWalletAddress(result.address);
        setWalletProvider(result.provider);
        setIsConnected(true);
        
        return { success: true, address: result.address };
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
      return { success: false, error: error.message };
    }
  };

  const disconnectWallet = () => {
    // Burn the wallet and redirect to home
    burnWalletAndGoHome();
  };

  const burnWalletAndRedirectToSelection = () => {
    // Burn the wallet and redirect to wallet selection
    burnWalletAndShowSelection();
  };

  const emergencyBurnWallet = () => {
    // Emergency burn - clears everything
    emergencyWalletBurn();
  };

  const openWalletModal = () => {
    setIsModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsModalOpen(false);
  };

  const value = {
    walletId,
    walletAddress,
    isConnected,
    isModalOpen,
    walletProvider,
    connectWallet: connectWalletHandler,
    disconnectWallet,
    burnWalletAndRedirectToSelection,
    emergencyBurnWallet,
    openWalletModal,
    closeWalletModal,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

