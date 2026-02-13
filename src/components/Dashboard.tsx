import AccountOverview from './AccountOverview';
import YieldFarming from './YieldFarming';
import TransactionFeed from './TransactionFeed';
import { mockAssets, mockTransactions } from '../mocks';
import type { Account } from '../types';
import styles from './Dashboard.module.less';

interface IDashboardProps {
  account: Account;
}

export default function Dashboard({ account }: IDashboardProps): JSX.Element {
  return (
    <div className={styles.dashboard}>
      <section className={styles['account-section']}>
        <AccountOverview account={account} />
      </section>

      <section className={styles['yield-section']}>
        <YieldFarming assets={mockAssets} />
      </section>

      <section className={styles['transactions-section']}>
        <TransactionFeed transactions={mockTransactions} />
      </section>
    </div>
  );
}
