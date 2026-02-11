import React from 'react';
import { useState } from 'react';
import type { Asset } from '../types';
import styles from './YieldFarming.module.less';

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
    <div className={styles['yield-farming']}>
      <h3>Yield Farming</h3>
      <div className={styles['assets-list']}>
        {assets.map(
          (asset: Asset): JSX.Element => (
            <div
              key={asset.id}
              className={`${styles['asset-card']} ${selectedAsset?.id === asset.id ? styles['selected'] : ''}`}
              onClick={(): void => setSelectedAsset(asset)}
            >
              <div className={styles['asset-header']}>
                <span className={styles['symbol']}>{asset.symbol}</span>
                {asset.apy && <span className={styles['apy']}>APY: {asset.apy}%</span>}
              </div>
              <div className={styles['asset-balance']}>
                <span>
                  {asset.balance} {asset.symbol}
                </span>
              </div>
              {asset.stakedAmount && (
                <div className={styles['staked']}>Staked: {asset.stakedAmount}</div>
              )}
            </div>
          )
        )}
      </div>

      {selectedAsset && (
        <div className={styles['farming-form']}>
          <h4>Stake {selectedAsset.symbol}</h4>
          <input
            type="number"
            placeholder={`Enter amount to stake`}
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setAmount(e.target.value)
            }
            className={styles['amount-input']}
          />
          <div className={styles['button-group']}>
            <button
              className={styles['approve-btn']}
              onClick={handleApprove}
              disabled={approvalPending || !amount}
            >
              {approvalPending ? 'Approving...' : 'Approve'}
            </button>
            <button
              className={styles['deposit-btn']}
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
