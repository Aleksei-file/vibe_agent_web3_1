import React from 'react';
import { useState } from 'react';
import type { Asset } from '../types';
import '../styles/YieldFarming.less';

interface YieldFarmingProps {
  assets: Asset[];
}

export const YieldFarming = ({ assets }: YieldFarmingProps): JSX.Element => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [approvalPending, setApprovalPending] = useState<boolean>(false);
  const [depositPending, setDepositPending] = useState<boolean>(false);

  const handleApprove = async (): Promise<void> => {
    if (!selectedAsset) return;

    setApprovalPending(true);
    // Simulate wallet signature popup
    setTimeout((): void => {
      alert(`Approving ${selectedAsset.symbol} in wallet...`);
      setApprovalPending(false);
    }, 800);
  };

  const handleDeposit = async (): Promise<void> => {
    if (!selectedAsset || !amount) return;

    setDepositPending(true);
    // Simulate wallet signature popup
    setTimeout((): void => {
      alert(`Depositing ${amount} ${selectedAsset.symbol} in wallet...`);
      setDepositPending(false);
      setAmount('');
    }, 800);
  };

  return (
    <div className="yield-farming">
      <h3>Yield Farming</h3>
      <div className="assets-list">
        {assets.map(
          (asset: Asset): JSX.Element => (
            <div
              key={asset.id}
              className={`asset-card ${selectedAsset?.id === asset.id ? 'selected' : ''}`}
              onClick={(): void => setSelectedAsset(asset)}
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
          )
        )}
      </div>

      {selectedAsset && (
        <div className="farming-form">
          <h4>Stake {selectedAsset.symbol}</h4>
          <input
            type="number"
            placeholder={`Enter amount to stake`}
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setAmount(e.target.value)
            }
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
