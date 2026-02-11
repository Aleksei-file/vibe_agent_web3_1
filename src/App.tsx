import React, { useState, lazy, Suspense } from 'react';
import { WalletConnect } from './components/WalletConnect';
import ThemeToggle from './components/ThemeToggle';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { Account } from './types';
import './styles/App.less';

const Dashboard = lazy(
  (): Promise<{ default: React.ComponentType<any> }> =>
    import('./components/Dashboard')
);

function App() {
  const [account, setAccount] = useState<Account | null>(null);

  const handleConnect = (newAccount: Account) => {
    setAccount(newAccount);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 DeFi Insight Dashboard</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <WalletConnect
            onConnect={handleConnect}
            isConnected={account?.isConnected ?? false}
          />
          <ThemeToggle />
        </div>
      </header>

      <main className="app-main">
        {account?.isConnected ? (
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard account={account} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="empty-state">
            <div className="empty-content">
              <h2>Welcome to DeFi Insight Dashboard</h2>
              <p>
                Connect your wallet to get started exploring DeFi opportunities
              </p>
              <div className="features-grid">
                <div className="feature">
                  <span>👛</span>
                  <h3>Wallet Connection</h3>
                  <p>Connect MetaMask or WalletConnect</p>
                </div>
                <div className="feature">
                  <span>📊</span>
                  <h3>Account Overview</h3>
                  <p>View your assets and balances</p>
                </div>
                <div className="feature">
                  <span>🎯</span>
                  <h3>Yield Farming</h3>
                  <p>Stake tokens and earn rewards</p>
                </div>
                <div className="feature">
                  <span>📝</span>
                  <h3>Transactions</h3>
                  <p>Track your transaction history</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 DeFi Insight Dashboard. Built with React + Web3</p>
      </footer>
    </div>
  );
}

export default App;
