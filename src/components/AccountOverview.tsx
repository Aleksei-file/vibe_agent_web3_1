import type { Account } from '../types';
import styles from './AccountOverview.module.less';
import { useTranslation } from 'react-i18next';

interface AccountOverviewProps {
  account: Account | null;
}

const AccountOverview = ({ account }: AccountOverviewProps): JSX.Element => {
  const { t } = useTranslation();
  if (!account || !account.isConnected) {
    return (
      <div className={styles['account-overview']}>
        <div className={styles['info-box']}>
          <p>{t('no_wallet_connected')}</p>
        </div>
      </div>
    );
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;

  return (
    <div className={styles['account-overview']}>
      <div className={styles['info-box']}>
        <div className={styles['info-item']}>
          <span className={styles['label']}>{t('address')}</span>
          <span className={styles['value']}>
            {account.ensName || shortAddress}
          </span>
        </div>
        <div className={styles['info-item']}>
          <span className={styles['label']}>{t('balance')}</span>
          <span className={styles['value']}>{account.balance} ETH</span>
        </div>
        <div className={styles['info-item']}>
          <span className={styles['label']}>{t('network')}</span>
          <span className={styles['value']}>{t('ethereum_mainnet')}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
