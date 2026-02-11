import type { Account } from '../types';
import '../styles/AccountOverview.less';

interface AccountOverviewProps {
  account: Account | null;
}

export const AccountOverview = ({
  account,
}: AccountOverviewProps): JSX.Element => {
  if (!account || !account.isConnected) {
    return (
      <div className="account-overview">
        <div className="info-box">
          <p>No wallet connected</p>
        </div>
      </div>
    );
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;

  return (
    <div className="account-overview">
      <div className="info-box">
        <div className="info-item">
          <span className="label">Address:</span>
          <span className="value">{account.ensName || shortAddress}</span>
        </div>
        <div className="info-item">
          <span className="label">Balance:</span>
          <span className="value">{account.balance} ETH</span>
        </div>
        <div className="info-item">
          <span className="label">Network:</span>
          <span className="value">Ethereum Mainnet</span>
        </div>
      </div>
    </div>
  );
};
