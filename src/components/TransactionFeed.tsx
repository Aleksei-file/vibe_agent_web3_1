import type { Transaction } from '../types';
import '../styles/TransactionFeed.less';

interface TransactionFeedProps {
  transactions: Transaction[];
}

const getStatusColor = (status: string) => {
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

const formatTime = (timestamp: number) => {
  const now = Date.now();
  const diff = now - timestamp;
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
};

const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    send: '📤 Sent',
    receive: '📥 Received',
    stake: '🔒 Staked',
    unstake: '🔓 Unstaked',
  };
  return labels[type] || type;
};

export const TransactionFeed = ({ transactions }: TransactionFeedProps) => {
  return (
    <div className="transaction-feed">
      <h3>Recent Transactions</h3>
      <div className="transactions-list">
        {transactions.length === 0 ? (
          <p className="empty-state">No transactions yet</p>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className={`transaction-item ${getStatusColor(tx.status)}`}
            >
              <div className="tx-left">
                <div className="tx-type">{getTypeLabel(tx.type)}</div>
                <div className="tx-time">{formatTime(tx.timestamp)}</div>
              </div>
              <div className="tx-center">
                <div className="tx-hash">{tx.hash.slice(0, 10)}...</div>
              </div>
              <div className="tx-right">
                <div className="tx-value">{tx.value} ETH</div>
                <div className={`tx-status ${tx.status}`}>
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
