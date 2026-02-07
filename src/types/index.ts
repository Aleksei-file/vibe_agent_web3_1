export interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  type: 'send' | 'receive' | 'stake' | 'unstake';
  timestamp: number;
  status: 'success' | 'pending' | 'failed';
  gasUsed?: string;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  usdValue: string;
  apy?: number;
  stakedAmount?: string;
}

export interface Account {
  address: string;
  balance: string;
  networkId: number;
  isConnected: boolean;
  ensName?: string;
}
