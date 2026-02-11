import { useState } from 'react';
import type { Account } from '../types';
import styles from './WalletConnect.module.less';

interface WalletConnectProps {
  onConnect: (account: Account) => void;
  isConnected: boolean;
}

export const WalletConnect = ({
  onConnect,
  isConnected,
}: WalletConnectProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConnect = async (): Promise<void> => {
    setIsLoading(true);
    // Simulate wallet connection delay
    setTimeout((): void => {
      const mockAccount: Account = {
        address: '0x1234567890123456789012345678901234567890',
        balance: '5.5',
        networkId: 1,
        isConnected: true,
        ensName: 'vibe.eth',
      };
      onConnect(mockAccount);
      setIsLoading(false);
    }, 1000);
  };

  const handleDisconnect = (): void => {
    onConnect({
      address: '',
      balance: '',
      networkId: 0,
      isConnected: false,
    });
  };

  return (
    <div className={styles['wallet-connect']}>
      {!isConnected ? (
        <button
          className={styles['connect-btn']}
          onClick={handleConnect}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <button className={styles['disconnect-btn']} onClick={handleDisconnect}>
          Disconnect
        </button>
      )}
    </div>
  );
};
