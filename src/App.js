import React from 'react';
import styled from 'styled-components';
import { WalletProvider } from './contexts/WalletContext';
import ConnectWalletButton from './components/ConnectWalletButton';
import WalletModal from './components/WalletModal';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin: 0;
  max-width: 600px;
  line-height: 1.6;
`;

const MainContent = styled.main`
  background: white;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const FeatureList = styled.div`
  margin-top: 32px;
  text-align: left;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
`;

const FeatureIcon = styled.div`
  font-size: 20px;
  margin-right: 12px;
`;

const FeatureText = styled.div`
  color: #374151;
  font-weight: 500;
`;

const WalletInfo = styled.div`
  margin-top: 32px;
  padding: 24px;
  background: #f3f4f6;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

const InfoTitle = styled.h3`
  margin: 0 0 16px 0;
  color: #1f2937;
  font-size: 18px;
`;

const InfoText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
`;

function App() {
  return (
    <WalletProvider>
      <AppContainer>
        <Header>
          <Title>Multi-Wallet Connect</Title>
        </Header>
        
        <MainContent>
          <ConnectWalletButton />
        </MainContent>
        
        <WalletModal />
      </AppContainer>
    </WalletProvider>
  );
}

export default App;

