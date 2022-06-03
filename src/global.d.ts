declare interface Program {
  id: string;
  name: string;
  dateDeployed: string;
  maturity: string;
  frequecy: string;
  status: string;
  disbursed: string;
  repayment: string;
  paid: string;
  balance: string;
}

declare interface Revenue {
  id: string;
  name: string;
  type: string;
  status: string;
  term: string;
  revenue: string;
  currency: string;
  financed: string;
  available: string;
}

declare interface CapitalRequest {
  id: string;
  name: string;
  type: string;
  term: string;
  revenue: string;
  currency: string;
  payout: string;
  payoutCurrency: string;
}
