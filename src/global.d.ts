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

declare interface Payout {
  title: string;
  amount: string;
  description: string;
  accounts: Array<string>
}

declare type MarginTypes = {
  m?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  mx?: number;
  my?: number;
};

declare type PaddingTypes = {
  p?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  px?: number;
  py?: number;
};

declare type SpacingType = MarginTypes & PaddingTypes;

declare type FlexDirectionProperty = "row" | "column" | "column-reverse";

declare type JustifyContentProperty =
  | "center"
  | "flex-start"
  | "space-between"
  | "space-around"
  | (string & {});

declare type FlexWrapProperty =
  | "wrap"
  | "no-wrap"
  | "wrap-reverse"
  | "unset"
  | "revert"
  | (string & {});

declare type DisplayType = "flex" | "table" | "table-row" | "table-column";
declare interface FlexWrapperProps {
  direction?: FlexDirectionProperty;
  align?: string;
  justify?: JustifyContentProperty;
  flexWrap?: FlexWrapProperty;
  rowGap?: number;
  columnGap?: number;
  display?: DisplayType;
}
