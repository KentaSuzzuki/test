// Comprehensive wallet connectors - ALL possible wallets online

// ============================================================================
// ETHEREUM WALLETS
// ============================================================================

// MetaMask - Most popular Ethereum wallet
export const createMetaMaskConnector = () => {
  return {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isMetaMask,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        throw new Error('MetaMask is not installed. Please install MetaMask extension.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'metamask' };
    }
  };
};

// Coinbase Wallet
export const createCoinbaseConnector = () => {
  return {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🔷',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isCoinbaseWallet,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isCoinbaseWallet) {
        throw new Error('Coinbase Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'coinbase' };
    }
  };
};

// Trust Wallet
export const createTrustConnector = () => {
  return {
    id: 'trust',
    name: 'Trust Wallet',
    icon: '🛡️',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isTrust,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isTrust) {
        throw new Error('Trust Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'trust' };
    }
  };
};

// Rainbow Wallet
export const createRainbowConnector = () => {
  return {
    id: 'rainbow',
    name: 'Rainbow',
    icon: '🌈',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isRainbow,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isRainbow) {
        throw new Error('Rainbow wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'rainbow' };
    }
  };
};

// Argent Wallet
export const createArgentConnector = () => {
  return {
    id: 'argent',
    name: 'Argent',
    icon: '🥷',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isArgent,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isArgent) {
        throw new Error('Argent wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'argent' };
    }
  };
};

// Frame Wallet
export const createFrameConnector = () => {
  return {
    id: 'frame',
    name: 'Frame',
    icon: '🖼️',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isFrame,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isFrame) {
        throw new Error('Frame wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'frame' };
    }
  };
};

// Rabby Wallet
export const createRabbyConnector = () => {
  return {
    id: 'rabby',
    name: 'Rabby',
    icon: '🐰',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isRabby,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isRabby) {
        throw new Error('Rabby wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'rabby' };
    }
  };
};

// Brave Wallet
export const createBraveConnector = () => {
  return {
    id: 'brave',
    name: 'Brave Wallet',
    icon: '🦁',
    category: 'ethereum',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isBraveWallet,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isBraveWallet) {
        throw new Error('Brave Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'brave' };
    }
  };
};

// ============================================================================
// SOLANA WALLETS
// ============================================================================

// Phantom
export const createPhantomConnector = () => {
  return {
    id: 'phantom',
    name: 'Phantom',
    icon: '👻',
    category: 'solana',
    isAvailable: () => typeof window !== 'undefined' && window.solana && window.solana.isPhantom,
    connect: async () => {
      if (!window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom wallet is not installed.');
      }
      const response = await window.solana.connect();
      return { success: true, address: response.publicKey.toString(), walletId: 'phantom' };
    }
  };
};

// Solflare
export const createSolflareConnector = () => {
  return {
    id: 'solflare',
    name: 'Solflare',
    icon: '☀️',
    category: 'solana',
    isAvailable: () => typeof window !== 'undefined' && window.solana && window.solana.isSolflare,
    connect: async () => {
      if (!window.solana || !window.solana.isSolflare) {
        throw new Error('Solflare wallet is not installed.');
      }
      const response = await window.solana.connect();
      return { success: true, address: response.publicKey.toString(), walletId: 'solflare' };
    }
  };
};

// Sollet
export const createSolletConnector = () => {
  return {
    id: 'sollet',
    name: 'Sollet',
    icon: '🔗',
    category: 'solana',
    isAvailable: () => typeof window !== 'undefined' && window.solana && window.solana.isSollet,
    connect: async () => {
      if (!window.solana || !window.solana.isSollet) {
        throw new Error('Sollet wallet is not installed.');
      }
      const response = await window.solana.connect();
      return { success: true, address: response.publicKey.toString(), walletId: 'sollet' };
    }
  };
};

// Slope
export const createSlopeConnector = () => {
  return {
    id: 'slope',
    name: 'Slope',
    icon: '⛰️',
    category: 'solana',
    isAvailable: () => typeof window !== 'undefined' && window.Slope,
    connect: async () => {
      if (!window.Slope) {
        throw new Error('Slope wallet is not installed.');
      }
      const response = await window.Slope.connect();
      return { success: true, address: response.publicKey.toString(), walletId: 'slope' };
    }
  };
};

// ============================================================================
// BINANCE SMART CHAIN WALLETS
// ============================================================================

// Binance Chain Wallet
export const createBinanceConnector = () => {
  return {
    id: 'binance',
    name: 'Binance Chain Wallet',
    icon: '🟡',
    category: 'binance',
    isAvailable: () => typeof window !== 'undefined' && window.BinanceChain,
    connect: async () => {
      if (!window.BinanceChain) {
        throw new Error('Binance Chain Wallet is not installed.');
      }
      const accounts = await window.BinanceChain.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'binance' };
    }
  };
};

// SafePal
export const createSafePalConnector = () => {
  return {
    id: 'safepal',
    name: 'SafePal',
    icon: '🛡️',
    category: 'binance',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isSafePal,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isSafePal) {
        throw new Error('SafePal wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'safepal' };
    }
  };
};

// ============================================================================
// POLYGON WALLETS
// ============================================================================

// Polygon Wallet
export const createPolygonConnector = () => {
  return {
    id: 'polygon',
    name: 'Polygon Wallet',
    icon: '🟣',
    category: 'polygon',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum,
    connect: async () => {
      if (!window.ethereum) {
        throw new Error('No Ethereum provider found.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'polygon' };
    }
  };
};

// ============================================================================
// AVALANCHE WALLETS
// ============================================================================

// Avalanche Wallet
export const createAvalancheConnector = () => {
  return {
    id: 'avalanche',
    name: 'Avalanche Wallet',
    icon: '❄️',
    category: 'avalanche',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum,
    connect: async () => {
      if (!window.ethereum) {
        throw new Error('No Ethereum provider found.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'avalanche' };
    }
  };
};

// ============================================================================
// NEAR WALLETS
// ============================================================================

// NEAR Wallet
export const createNEARConnector = () => {
  return {
    id: 'near',
    name: 'NEAR Wallet',
    icon: '🌐',
    category: 'near',
    isAvailable: () => true,
    connect: async () => {
      throw new Error('NEAR Wallet integration requires additional setup. Please install @near-wallet-selector/core.');
    }
  };
};

// Sender
export const createSenderConnector = () => {
  return {
    id: 'sender',
    name: 'Sender',
    icon: '📤',
    category: 'near',
    isAvailable: () => true,
    connect: async () => {
      throw new Error('Sender wallet integration requires additional setup.');
    }
  };
};

// ============================================================================
// COSMOS WALLETS
// ============================================================================

// Keplr
export const createKeplrConnector = () => {
  return {
    id: 'keplr',
    name: 'Keplr',
    icon: '🔑',
    category: 'cosmos',
    isAvailable: () => typeof window !== 'undefined' && window.keplr,
    connect: async () => {
      if (!window.keplr) {
        throw new Error('Keplr wallet is not installed.');
      }
      const response = await window.keplr.enable('cosmoshub-4');
      const accounts = await window.keplr.getAccounts();
      return { success: true, address: accounts[0].address, walletId: 'keplr' };
    }
  };
};

// Cosmostation
export const createCosmostationConnector = () => {
  return {
    id: 'cosmostation',
    name: 'Cosmostation',
    icon: '🌌',
    category: 'cosmos',
    isAvailable: () => typeof window !== 'undefined' && window.cosmostation,
    connect: async () => {
      if (!window.cosmostation) {
        throw new Error('Cosmostation wallet is not installed.');
      }
      const response = await window.cosmostation.cosmos.request({ method: 'cosmos_requestAccounts' });
      return { success: true, address: response[0], walletId: 'cosmostation' };
    }
  };
};

// ============================================================================
// TERRA WALLETS
// ============================================================================

// Terra Station
export const createTerraStationConnector = () => {
  return {
    id: 'terrastation',
    name: 'Terra Station',
    icon: '🌍',
    category: 'terra',
    isAvailable: () => typeof window !== 'undefined' && window.isTerraExtensionAvailable,
    connect: async () => {
      if (!window.isTerraExtensionAvailable) {
        throw new Error('Terra Station wallet is not installed.');
      }
      const response = await window.terra.connect();
      return { success: true, address: response.wallets[0].terraAddress, walletId: 'terrastation' };
    }
  };
};

// ============================================================================
// HARDWARE WALLETS
// ============================================================================

// Ledger
export const createLedgerConnector = () => {
  return {
    id: 'ledger',
    name: 'Ledger',
    icon: '🔐',
    category: 'hardware',
    isAvailable: () => true,
    connect: async () => {
      throw new Error('Ledger integration requires additional setup. Please install @ledgerhq/connect-kit.');
    }
  };
};

// Trezor
export const createTrezorConnector = () => {
  return {
    id: 'trezor',
    name: 'Trezor',
    icon: '🔒',
    category: 'hardware',
    isAvailable: () => true,
    connect: async () => {
      throw new Error('Trezor integration requires additional setup. Please install @trezor/connect.');
    }
  };
};

// ============================================================================
// MOBILE WALLETS (WalletConnect)
// ============================================================================

// WalletConnect
export const createWalletConnectConnector = () => {
  return {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    category: 'mobile',
    isAvailable: () => true,
    connect: async () => {
      throw new Error('WalletConnect integration requires additional setup. Please install @walletconnect/web3-provider.');
    }
  };
};

// ============================================================================
// ADDITIONAL POPULAR WALLETS
// ============================================================================

// Exodus
export const createExodusConnector = () => {
  return {
    id: 'exodus',
    name: 'Exodus',
    icon: '🏛️',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.exodus,
    connect: async () => {
      if (!window.exodus) {
        throw new Error('Exodus wallet is not installed.');
      }
      const response = await window.exodus.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: response[0], walletId: 'exodus' };
    }
  };
};

// Atomic Wallet
export const createAtomicConnector = () => {
  return {
    id: 'atomic',
    name: 'Atomic Wallet',
    icon: '⚛️',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isAtomic,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isAtomic) {
        throw new Error('Atomic Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'atomic' };
    }
  };
};

// Guarda Wallet
export const createGuardaConnector = () => {
  return {
    id: 'guarda',
    name: 'Guarda Wallet',
    icon: '🛡️',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isGuarda,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isGuarda) {
        throw new Error('Guarda Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'guarda' };
    }
  };
};

// Math Wallet
export const createMathConnector = () => {
  return {
    id: 'math',
    name: 'Math Wallet',
    icon: '🧮',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isMathWallet,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isMathWallet) {
        throw new Error('Math Wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'math' };
    }
  };
};

// TokenPocket
export const createTokenPocketConnector = () => {
  return {
    id: 'tokenpocket',
    name: 'TokenPocket',
    icon: '👛',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.ethereum && window.ethereum.isTokenPocket,
    connect: async () => {
      if (!window.ethereum || !window.ethereum.isTokenPocket) {
        throw new Error('TokenPocket wallet is not installed.');
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: accounts[0], walletId: 'tokenpocket' };
    }
  };
};

// BitKeep
export const createBitKeepConnector = () => {
  return {
    id: 'bitkeep',
    name: 'BitKeep',
    icon: '🔷',
    category: 'multi',
    isAvailable: () => typeof window !== 'undefined' && window.bitkeep,
    connect: async () => {
      if (!window.bitkeep) {
        throw new Error('BitKeep wallet is not installed.');
      }
      const response = await window.bitkeep.ethereum.request({ method: 'eth_requestAccounts' });
      return { success: true, address: response[0], walletId: 'bitkeep' };
    }
  };
};

// Get ALL available wallets
export const getAllWallets = () => {
  return [
    // Ethereum Wallets
    createMetaMaskConnector(),
    createCoinbaseConnector(),
    createTrustConnector(),
    createRainbowConnector(),
    createArgentConnector(),
    createFrameConnector(),
    createRabbyConnector(),
    createBraveConnector(),
    
    // Solana Wallets
    createPhantomConnector(),
    createSolflareConnector(),
    createSolletConnector(),
    createSlopeConnector(),
    
    // Binance Wallets
    createBinanceConnector(),
    createSafePalConnector(),
    
    // Other Chains
    createPolygonConnector(),
    createAvalancheConnector(),
    
    // NEAR Wallets
    createNEARConnector(),
    createSenderConnector(),
    
    // Cosmos Wallets
    createKeplrConnector(),
    createCosmostationConnector(),
    
    // Terra Wallets
    createTerraStationConnector(),
    
    // Hardware Wallets
    createLedgerConnector(),
    createTrezorConnector(),
    
    // Mobile Wallets
    createWalletConnectConnector(),
    
    // Additional Wallets
    createExodusConnector(),
    createAtomicConnector(),
    createGuardaConnector(),
    createMathConnector(),
    createTokenPocketConnector(),
    createBitKeepConnector(),
  ];
};

// Get wallets by category
export const getWalletsByCategory = (category) => {
  return getAllWallets().filter(wallet => wallet.category === category);
};

// Get available wallets (installed)
export const getAvailableWallets = () => {
  return getAllWallets().filter(wallet => wallet.isAvailable());
};
