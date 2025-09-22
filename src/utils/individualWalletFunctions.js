// Individual wallet connection functions - each wallet has its own dedicated function

// ============================================================================
// METAMASK WALLET CONNECTION
// ============================================================================
export const connectToMetaMask = async () => {
  console.log('🦊 Attempting to connect to MetaMask...');
  
  if (typeof window === 'undefined') {
    throw new Error('MetaMask connection requires a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('MetaMask is not installed. Please install MetaMask extension from https://metamask.io');
  }

  if (!window.ethereum.isMetaMask) {
    throw new Error('MetaMask is not detected. Please make sure MetaMask is installed and enabled.');
  }

  try {
    // Request account access - this will show MetaMask popup
    console.log('Requesting MetaMask account access...');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your MetaMask account.');
    }

    // Get the connected account
    const account = accounts[0];
    console.log('MetaMask account connected:', account);
    
    // Get chain ID
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      walletId: 'metamask',
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'metamask'
    };
  } catch (error) {
    console.error('MetaMask connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the MetaMask connection request.');
    } else if (error.code === -32002) {
      throw new Error('MetaMask connection request already pending. Please check MetaMask.');
    } else {
      throw new Error(`MetaMask connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// COINBASE WALLET CONNECTION
// ============================================================================
export const connectToCoinbaseWallet = async () => {
  console.log('🔷 Attempting to connect to Coinbase Wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Coinbase Wallet connection requires a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Coinbase Wallet is not installed. Please install Coinbase Wallet extension.');
  }

  if (!window.ethereum.isCoinbaseWallet) {
    throw new Error('Coinbase Wallet is not detected. Please make sure Coinbase Wallet is installed and enabled.');
  }

  try {
    console.log('Requesting Coinbase Wallet account access...');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Coinbase Wallet account.');
    }

    const account = accounts[0];
    console.log('Coinbase Wallet account connected:', account);
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      walletId: 'coinbase',
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'coinbase'
    };
  } catch (error) {
    console.error('Coinbase Wallet connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Coinbase Wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Coinbase Wallet connection request already pending. Please check Coinbase Wallet.');
    } else {
      throw new Error(`Coinbase Wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// PHANTOM WALLET CONNECTION (SOLANA)
// ============================================================================
export const connectToPhantom = async () => {
  console.log('👻 Attempting to connect to Phantom wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Phantom wallet connection requires a browser environment');
  }

  if (!window.solana) {
    throw new Error('Phantom wallet is not installed. Please install Phantom extension from https://phantom.app');
  }

  if (!window.solana.isPhantom) {
    throw new Error('Phantom wallet is not detected. Please make sure Phantom is installed and enabled.');
  }

  try {
    console.log('Requesting Phantom wallet connection...');
    const response = await window.solana.connect();

    if (!response.publicKey) {
      throw new Error('No public key received from Phantom wallet.');
    }

    const address = response.publicKey.toString();
    console.log('Phantom wallet connected:', address);

    return {
      success: true,
      walletId: 'phantom',
      address: address,
      publicKey: response.publicKey,
      provider: window.solana,
      walletType: 'phantom'
    };
  } catch (error) {
    console.error('Phantom connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Phantom wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Phantom wallet connection request already pending. Please check Phantom wallet.');
    } else {
      throw new Error(`Phantom wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// TRUST WALLET CONNECTION
// ============================================================================
export const connectToTrustWallet = async () => {
  console.log('🛡️ Attempting to connect to Trust Wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Trust Wallet connection requires a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Trust Wallet is not installed. Please install Trust Wallet browser extension.');
  }

  if (!window.ethereum.isTrust) {
    throw new Error('Trust Wallet is not detected. Please make sure Trust Wallet is installed and enabled.');
  }

  try {
    console.log('Requesting Trust Wallet account access...');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Trust Wallet account.');
    }

    const account = accounts[0];
    console.log('Trust Wallet account connected:', account);
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      walletId: 'trustwallet',
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'trustwallet'
    };
  } catch (error) {
    console.error('Trust Wallet connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Trust Wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Trust Wallet connection request already pending. Please check Trust Wallet.');
    } else {
      throw new Error(`Trust Wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// BINANCE CHAIN WALLET CONNECTION
// ============================================================================
export const connectToBinanceWallet = async () => {
  console.log('🟡 Attempting to connect to Binance Chain Wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Binance Chain Wallet connection requires a browser environment');
  }

  if (!window.BinanceChain) {
    throw new Error('Binance Chain Wallet is not installed. Please install Binance Chain Wallet extension.');
  }

  try {
    console.log('Requesting Binance Chain Wallet account access...');
    const accounts = await window.BinanceChain.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Binance Chain Wallet account.');
    }

    const account = accounts[0];
    console.log('Binance Chain Wallet account connected:', account);
    
    const chainId = await window.BinanceChain.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      walletId: 'binancewallet',
      address: account,
      chainId: chainId,
      provider: window.BinanceChain,
      walletType: 'binancewallet'
    };
  } catch (error) {
    console.error('Binance Chain Wallet connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Binance Chain Wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Binance Chain Wallet connection request already pending. Please check Binance Chain Wallet.');
    } else {
      throw new Error(`Binance Chain Wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// SOLFLARE WALLET CONNECTION
// ============================================================================
export const connectToSolflare = async () => {
  console.log('☀️ Attempting to connect to Solflare wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Solflare wallet connection requires a browser environment');
  }

  if (!window.solana) {
    throw new Error('Solflare wallet is not installed. Please install Solflare extension.');
  }

  if (!window.solana.isSolflare) {
    throw new Error('Solflare wallet is not detected. Please make sure Solflare is installed and enabled.');
  }

  try {
    console.log('Requesting Solflare wallet connection...');
    const response = await window.solana.connect();

    if (!response.publicKey) {
      throw new Error('No public key received from Solflare wallet.');
    }

    const address = response.publicKey.toString();
    console.log('Solflare wallet connected:', address);

    return {
      success: true,
      walletId: 'solflare',
      address: address,
      publicKey: response.publicKey,
      provider: window.solana,
      walletType: 'solflare'
    };
  } catch (error) {
    console.error('Solflare connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Solflare wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Solflare wallet connection request already pending. Please check Solflare wallet.');
    } else {
      throw new Error(`Solflare wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// RAINBOW WALLET CONNECTION
// ============================================================================
export const connectToRainbow = async () => {
  console.log('🌈 Attempting to connect to Rainbow wallet...');
  
  if (typeof window === 'undefined') {
    throw new Error('Rainbow wallet connection requires a browser environment');
  }

  if (!window.ethereum) {
    throw new Error('Rainbow wallet is not installed. Please install Rainbow wallet extension.');
  }

  if (!window.ethereum.isRainbow) {
    throw new Error('Rainbow wallet is not detected. Please make sure Rainbow is installed and enabled.');
  }

  try {
    console.log('Requesting Rainbow wallet account access...');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your Rainbow wallet account.');
    }

    const account = accounts[0];
    console.log('Rainbow wallet account connected:', account);
    
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    return {
      success: true,
      walletId: 'rainbow',
      address: account,
      chainId: chainId,
      provider: window.ethereum,
      walletType: 'rainbow'
    };
  } catch (error) {
    console.error('Rainbow wallet connection error:', error);
    if (error.code === 4001) {
      throw new Error('User rejected the Rainbow wallet connection request.');
    } else if (error.code === -32002) {
      throw new Error('Rainbow wallet connection request already pending. Please check Rainbow wallet.');
    } else {
      throw new Error(`Rainbow wallet connection failed: ${error.message}`);
    }
  }
};

// ============================================================================
// WALLETCONNECT CONNECTION (Requires Setup)
// ============================================================================
export const connectToWalletConnect = async () => {
  console.log('🔗 Attempting to connect via WalletConnect...');
  
  // This requires the actual WalletConnect library to be installed
  // For now, we'll provide setup instructions
  throw new Error('WalletConnect integration requires additional setup. Please install @walletconnect/web3-provider package and configure it properly. Visit https://walletconnect.com for setup instructions.');
};

// ============================================================================
// NEAR WALLET CONNECTION (Requires Setup)
// ============================================================================
export const connectToNEARWallet = async () => {
  console.log('🌐 Attempting to connect to NEAR Wallet...');
  
  // This requires the actual NEAR wallet selector to be installed
  // For now, we'll provide setup instructions
  throw new Error('NEAR Wallet integration requires additional setup. Please install @near-wallet-selector/core and configure it properly. Visit https://near.org for setup instructions.');
};

// ============================================================================
// WALLET AVAILABILITY CHECKER
// ============================================================================
export const checkWalletAvailability = () => {
  if (typeof window === 'undefined') {
    return {
      metamask: false,
      coinbase: false,
      phantom: false,
      trustwallet: false,
      binancewallet: false,
      solflare: false,
      rainbow: false,
      walletconnect: true, // Always available (requires setup)
      near: true // Always available (requires setup)
    };
  }

  return {
    metamask: !!(window.ethereum && window.ethereum.isMetaMask),
    coinbase: !!(window.ethereum && window.ethereum.isCoinbaseWallet),
    phantom: !!(window.solana && window.solana.isPhantom),
    trustwallet: !!(window.ethereum && window.ethereum.isTrust),
    binancewallet: !!window.BinanceChain,
    solflare: !!(window.solana && window.solana.isSolflare),
    rainbow: !!(window.ethereum && window.ethereum.isRainbow),
    walletconnect: true, // Always available (requires setup)
    near: true // Always available (requires setup)
  };
};
