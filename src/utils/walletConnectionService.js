// Comprehensive wallet connection service with real implementations

// MetaMask Connection Function
export const connectMetaMask = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('MetaMask is not installed. Please install MetaMask extension from https://metamask.io');
  }

  if (!window.ethereum.isMetaMask) {
    throw new Error('MetaMask is not detected. Please make sure MetaMask is installed and enabled.');
  }

  try {
    // Request account access - this will show MetaMask popup
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your MetaMask account.');
    }

    // Get the connected account
    const account = accounts[0];
    
    // Get chain ID
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'metamask'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check MetaMask.');
    } else {
      throw new Error(`MetaMask connection failed: ${error.message}`);
    }
  }
};

// Coinbase Wallet Connection Function
export const connectCoinbaseWallet = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Coinbase Wallet is not installed. Please install Coinbase Wallet extension.');
  }

  if (!window.ethereum.isCoinbaseWallet) {
    throw new Error('Coinbase Wallet is not detected. Please make sure Coinbase Wallet is installed and enabled.');
  }

  try {
    // Request account access - this will show Coinbase Wallet popup
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Coinbase Wallet account.');
    }

    const account = accounts[0];
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'coinbase'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Coinbase Wallet.');
    } else {
      throw new Error(`Coinbase Wallet connection failed: ${error.message}`);
    }
  }
};

// Phantom Wallet Connection Function (Solana)
export const connectPhantom = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.solana) {
    throw new Error('Phantom wallet is not installed. Please install Phantom extension from https://phantom.app');
  }

  if (!window.solana.isPhantom) {
    throw new Error('Phantom wallet is not detected. Please make sure Phantom is installed and enabled.');
  }

  try {
    // Request connection - this will show Phantom popup
    const response = await window.solana.connect();

    if (!response.publicKey) {
      throw new Error('No public key received from Phantom wallet.');
    }

    return {
      success: true,
      address: response.publicKey.toString(),
      publicKey: response.publicKey,
      provider: window.solana,
      walletType: 'phantom'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Phantom wallet.');
    } else {
      throw new Error(`Phantom connection failed: ${error.message}`);
    }
  }
};

// Trust Wallet Connection Function
export const connectTrustWallet = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Trust Wallet is not installed. Please install Trust Wallet browser extension.');
  }

  if (!window.ethereum.isTrust) {
    throw new Error('Trust Wallet is not detected. Please make sure Trust Wallet is installed and enabled.');
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Trust Wallet account.');
    }

    const account = accounts[0];
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'trustwallet'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Trust Wallet.');
    } else {
      throw new Error(`Trust Wallet connection failed: ${error.message}`);
    }
  }
};

// Binance Chain Wallet Connection Function
export const connectBinanceWallet = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.BinanceChain) {
    throw new Error('Binance Chain Wallet is not installed. Please install Binance Chain Wallet extension.');
  }

  try {
    const accounts = await window.BinanceChain.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Binance Chain Wallet account.');
    }

    const account = accounts[0];
    
    const chainId = await window.BinanceChain.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      address: account,
      chainId: chainId,
      provider: window.BinanceChain,
      walletType: 'binancewallet'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Binance Chain Wallet.');
    } else {
      throw new Error(`Binance Chain Wallet connection failed: ${error.message}`);
    }
  }
};

// Solflare Wallet Connection Function
export const connectSolflare = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.solana) {
    throw new Error('Solflare wallet is not installed. Please install Solflare extension.');
  }

  if (!window.solana.isSolflare) {
    throw new Error('Solflare wallet is not detected. Please make sure Solflare is installed and enabled.');
  }

  try {
    const response = await window.solana.connect();

    if (!response.publicKey) {
      throw new Error('No public key received from Solflare wallet.');
    }

    return {
      success: true,
      address: response.publicKey.toString(),
      publicKey: response.publicKey,
      provider: window.solana,
      walletType: 'solflare'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Solflare wallet.');
    } else {
      throw new Error(`Solflare connection failed: ${error.message}`);
    }
  }
};

// Rainbow Wallet Connection Function
export const connectRainbow = async () => {
  if (typeof window === 'undefined') {
    throw new Error('This function must be called in a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Rainbow wallet is not installed. Please install Rainbow wallet extension.');
  }

  if (!window.ethereum.isRainbow) {
    throw new Error('Rainbow wallet is not detected. Please make sure Rainbow is installed and enabled.');
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Rainbow wallet account.');
    }

    const account = accounts[0];
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'rainbow'
    };
  } catch (error) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request.');
    } else if (error.code === -32002) {
      throw new Error('Connection request already pending. Please check Rainbow wallet.');
    } else {
      throw new Error(`Rainbow wallet connection failed: ${error.message}`);
    }
  }
};

// WalletConnect Connection Function (requires setup)
export const connectWalletConnect = async () => {
  // This requires the actual WalletConnect library to be installed
  // For now, we'll provide setup instructions
  throw new Error('WalletConnect integration requires additional setup. Please install @walletconnect/web3-provider package and configure it properly. Visit https://walletconnect.com for setup instructions.');
};

// NEAR Wallet Connection Function (requires setup)
export const connectNEAR = async () => {
  // This requires the actual NEAR wallet selector to be installed
  // For now, we'll provide setup instructions
  throw new Error('NEAR Wallet integration requires additional setup. Please install @near-wallet-selector/core and configure it properly. Visit https://near.org for setup instructions.');
};

// Master connection function that routes to the appropriate wallet
export const connectWallet = async (walletType) => {
  switch (walletType.toLowerCase()) {
    case 'metamask':
      return await connectMetaMask();
    case 'coinbase':
    case 'coinbasewallet':
      return await connectCoinbaseWallet();
    case 'phantom':
      return await connectPhantom();
    case 'trustwallet':
    case 'trust':
      return await connectTrustWallet();
    case 'binancewallet':
    case 'binance':
      return await connectBinanceWallet();
    case 'solflare':
      return await connectSolflare();
    case 'rainbow':
      return await connectRainbow();
    case 'walletconnect':
      return await connectWalletConnect();
    case 'near':
    case 'nearwallet':
      return await connectNEAR();
    default:
      throw new Error(`Unsupported wallet type: ${walletType}`);
  }
};
