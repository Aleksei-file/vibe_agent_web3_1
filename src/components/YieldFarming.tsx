import { useState } from 'react';
import type { Asset } from '../types';
import '../styles/YieldFarming.less';

interface YieldFarmingProps {
  assets: Asset[];
}

export const YieldFarming = ({ assets }: YieldFarmingProps) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [amount, setAmount] = useState('');
  const [approvalPending, setApprovalPending] = useState(false);
  const [depositPending, setDepositPending] = useState(false);

  const handleApprove = async () => {
    if (!selectedAsset) return;

    setApprovalPending(true);
    // Simulate wallet signature popup
    setTimeout(() => {
      alert(`Approving ${selectedAsset.symbol} in wallet...`);
      setApprovalPending(false);
    }, 800);
  };

  const handleDeposit = async () => {
    if (!selectedAsset || !amount) return;

    setDepositPending(true);
    // Simulate wallet signature popup
    setTimeout(() => {
      alert(`Depositing ${amount} ${selectedAsset.symbol} in wallet...`);
      setDepositPending(false);
      setAmount('');
    }, 800);
  };

  return (
    <div className="yield-farming">
      <h3>Yield Farming</h3>
      <div className="assets-list">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className={`asset-card ${selectedAsset?.id === asset.id ? 'selected' : ''}`}
            onClick={() => setSelectedAsset(asset)}
          >
            <div className="asset-header">
              <span className="symbol">{asset.symbol}</span>
              {asset.apy && <span className="apy">APY: {asset.apy}%</span>}
            </div>
            <div className="asset-balance">
              <span>
                {asset.balance} {asset.symbol}
              </span>
            </div>
            {asset.stakedAmount && (
              <div className="staked">Staked: {asset.stakedAmount}</div>
            )}
          </div>
        ))}
      </div>

      {selectedAsset && (
        <div className="farming-form">
          <h4>Stake {selectedAsset.symbol}</h4>
          <input
            type="number"
            placeholder={`Enter amount to stake`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
          <div className="button-group">
            <button
              className="approve-btn"
              onClick={handleApprove}
              disabled={approvalPending || !amount}
            >
              {approvalPending ? 'Approving...' : 'Approve'}
            </button>
            <button
              className="deposit-btn"
              onClick={handleDeposit}
              disabled={depositPending || !amount}
            >
              {depositPending ? 'Depositing...' : 'Deposit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
