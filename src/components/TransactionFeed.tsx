import type { Transaction } from '../types';
import styles from './TransactionFeed.module.less';
import { useTranslation } from 'react-i18next';

interface TransactionFeedProps {
  transactions: Transaction[];
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'success':
      return 'success';
    case 'pending':
      return 'pending';
    case 'failed':
      return 'failed';
    default:
      return '';
  }
};

const formatTime = (timestamp: number, t: any): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (hours < 1) return t('just_now');
  if (hours < 24) return t('hours_ago', { count: hours });
  if (days < 7) return t('days_ago', { count: days });
  return new Date(timestamp).toLocaleDateString();
};

const getTypeLabel = (type: string, t: any): string => {
  const labels: Record<string, string> = {
    send: `📤 ${t('sent')}`,
    receive: `📥 ${t('received')}`,
    stake: `🔒 ${t('staked')}`,
    unstake: `🔓 ${t('unstaked')}`,
  };
  return labels[type] || type;
};

const TransactionFeed = ({
  transactions,
}: TransactionFeedProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles['transaction-feed']}>
      <h3>{t('recent_transactions')}</h3>
      <div className={styles['transactions-list']}>
        {transactions.length === 0 ? (
          <p className={styles['empty-state']}>{t('no_transactions')}</p>
        ) : (
          transactions.map(
            (tx: Transaction): JSX.Element => (
              <div
                key={tx.id}
                className={`${styles['transaction-item']} ${styles[getStatusColor(tx.status)] ?? ''}`}
              >
                <div className={styles['tx-left']}>
                  <div className={styles['tx-type']}>
                    {getTypeLabel(tx.type, t)}
                  </div>
                  <div className={styles['tx-time']}>
                    {formatTime(tx.timestamp, t)}
                  </div>
                </div>
                <div className={styles['tx-center']}>
                  <div className={styles['tx-hash']}>
                    {tx.hash.slice(0, 10)}...
                  </div>
                </div>
                <div className={styles['tx-right']}>
                  <div className={styles['tx-value']}>{tx.value} ETH</div>
                  <div
                    className={`${styles['tx-status']} ${styles[tx.status] ?? ''}`}
                  >
                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default TransactionFeed;
