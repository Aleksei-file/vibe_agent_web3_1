import React, { useState, lazy, Suspense } from 'react';
import WalletConnect from './components/WalletConnect';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import ErrorBoundary from './components/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import type { Account } from './types';
import './styles/App.less';

const Dashboard = lazy(
  (): Promise<{ default: React.ComponentType<any> }> =>
    import('./components/Dashboard')
);

function App() {
  const [account, setAccount] = useState<Account | null>(null);
  const { t } = useTranslation();
  const handleConnect = (newAccount: Account) => {
    setAccount(newAccount);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 {t('defi_dashboard')}</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <WalletConnect
            onConnect={handleConnect}
            isConnected={account?.isConnected ?? false}
          />
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </header>

      <main className="app-main">
        {account?.isConnected ? (
          <ErrorBoundary>
            <Suspense fallback={<div>{t('loading')}</div>}>
              <Dashboard account={account} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="empty-state">
            <div className="empty-content">
              <h2>{t('welcome')}</h2>
              <p>{t('connect_to_start')}</p>
              <div className="features-grid">
                <div className="feature">
                  <span>💻</span>
                  <h3>{t('wallet_connection')}</h3>
                  <p>{t('connect_metamask')}</p>
                </div>
                <div className="feature">
                  <span>📊</span>
                  <h3>{t('account_overview')}</h3>
                  <p>{t('view_assets')}</p>
                </div>
                <div className="feature">
                  <span>🎯</span>
                  <h3>{t('yield_farming_feature')}</h3>
                  <p>{t('stake_tokens')}</p>
                </div>
                <div className="feature">
                  <span>📝</span>
                  <h3>{t('transactions')}</h3>
                  <p>{t('track_history')}</p>
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
