export const burnWalletAndRedirect = (redirectUrl = '/', burnReason = 'User disconnected') => {
  console.log(`Burning wallet connection: ${burnReason}`);
  localStorage.removeItem('walletId');
  localStorage.removeItem('walletAddress');
  localStorage.removeItem('isConnected');
  localStorage.removeItem('walletProvider');
  localStorage.removeItem('chainId');
  sessionStorage.removeItem('walletId');
  sessionStorage.removeItem('walletAddress');
  sessionStorage.removeItem('isConnected');

  if (window.ethereum && window.ethereum.disconnect) {
    try {
      window.ethereum.disconnect();
    } catch (error) {
      console.log('Ethereum provider disconnect failed:', error);
    }
  }
  
  if (window.solana && window.solana.disconnect) {
    try {
      window.solana.disconnect();
    } catch (error) {
      console.log('Solana provider disconnect failed:', error);
    }
  }
  
  if (window.BinanceChain && window.BinanceChain.disconnect) {
    try {
      window.BinanceChain.disconnect();
    } catch (error) {
      console.log('Binance Chain disconnect failed:', error);
    }
  }
  
  console.log('Wallet burned successfully');
  
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 100);
};

export const burnWalletAndShowSelection = () => {
  burnWalletAndRedirect('/wallet-selection', 'User requested wallet selection');
};

export const burnWalletAndGoHome = () => {
  burnWalletAndRedirect('/', 'User disconnected wallet');
};

export const burnWalletAndGoToLogin = () => {
  burnWalletAndRedirect('/login', 'User logged out');
};

export const burnWalletAndGoToDashboard = () => {
  burnWalletAndRedirect('/dashboard', 'Wallet session expired');
};

export const emergencyWalletBurn = () => {
  console.log('EMERGENCY WALLET BURN INITIATED');
  localStorage.clear();
  sessionStorage.clear();
  if (window.ethereum) {
    try {
      window.ethereum.disconnect();
    } catch (error) {
      console.log('Emergency ethereum disconnect failed:', error);
    }
  }
  
  if (window.solana) {
    try {
      window.solana.disconnect();
    } catch (error) {
      console.log('Emergency solana disconnect failed:', error);
    }
  }
  
  if (window.BinanceChain) {
    try {
      window.BinanceChain.disconnect();
    } catch (error) {
      console.log('Emergency binance disconnect failed:', error);
    }
  }
  
  console.log('Emergency wallet burn completed');
  window.location.href = '/';
};

export const getBurnStatus = () => {
  const walletId = localStorage.getItem('walletId');
  const walletAddress = localStorage.getItem('walletAddress');
  const isConnected = localStorage.getItem('isConnected');
  
  return {
    isBurned: !walletId && !walletAddress && !isConnected,
    hasWalletData: !!(walletId || walletAddress || isConnected),
    walletId: walletId,
    walletAddress: walletAddress,
    isConnected: isConnected === 'true'
  };
};
