import type { Account } from '../types';
import styles from './AccountOverview.module.less';

interface AccountOverviewProps {
  account: Account | null;
}

export const AccountOverview = ({
  account,
}: AccountOverviewProps): JSX.Element => {
  if (!account || !account.isConnected) {
    return (
      <div className={styles['account-overview']}>
        <div className={styles['info-box']}>
          <p>No wallet connected</p>
        </div>
      </div>
    );
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;

  return (
    <div className={styles['account-overview']}>
      <div className={styles['info-box']}>
        <div className={styles['info-item']}>
          <span className={styles['label']}>Address:</span>
          <span className={styles['value']}>
            {account.ensName || shortAddress}
          </span>
        </div>
        <div className={styles['info-item']}>
          <span className={styles['label']}>Balance:</span>
          <span className={styles['value']}>{account.balance} ETH</span>
        </div>
        <div className={styles['info-item']}>
          <span className={styles['label']}>Network:</span>
          <span className={styles['value']}>Ethereum Mainnet</span>
        </div>
      </div>
    </div>
  );
};
