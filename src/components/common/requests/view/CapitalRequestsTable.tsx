import React from "react";

import Dropdown from "components/ui/Dropdown";
import Input from "components/ui/Input";
import Table, {
  TableHeaderCell,
  TableRow,
  TableCell,
} from "components/ui/Table";

import { ReactComponent as CanadaFlag } from "assets/flags/canada.svg";
import { ReactComponent as ChineseFlag } from "assets/flags/chinese.svg";
import { ReactComponent as IrelandFlag } from "assets/flags/ireland.svg";
import { ReactComponent as UkFlag } from "assets/flags/uk.svg";

const CapitalRequestsTable: React.FC<{
  requests: Array<any>;
  selected: Array<String>; // List of ids of the selected items
  onSelect: (id: string) => void;
}> = ({ selected = [], requests = [], onSelect }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Name of Customer</TableHeaderCell>
          <TableHeaderCell>Customer ID</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Term Length</TableHeaderCell>
          <TableHeaderCell>Current Revenue Per Period</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
          <TableHeaderCell>Payout Amount</TableHeaderCell>
          <TableHeaderCell>Payout Currency</TableHeaderCell>
        </TableRow>
      </thead>

      <tbody>
        {requests.map((request) => (
          <TableRow key={request?.id}>
            <TableCell>
              <Input
                type="checkbox"
                checked={selected.includes(request?.id)}
                onChange={() => onSelect(request?.id)}
              />
            </TableCell>
            <TableCell>{request?.name}</TableCell>
            <TableCell>{request?.id}</TableCell>
            <TableCell>{request?.type}</TableCell>
            <TableCell>{request?.term}</TableCell>
            <TableCell>{request?.revenue}</TableCell>
            <TableCell>{request?.currency}</TableCell>
            <TableCell>{request?.payout}</TableCell>
            <TableCell>
              <Dropdown
                defaultActive={request?.payoutCurrency}
                items={[
                  {
                    key: "KES",
                    label: "KES",
                    icon: <UkFlag />,
                  },
                  {
                    key: "CAD",
                    label: "CAD",
                    icon: <CanadaFlag />,
                  },
                  {
                    key: "£",
                    label: "£",
                    icon: <ChineseFlag />,
                  },
                  {
                    key: "$",
                    label: "$",
                    icon: <IrelandFlag />,
                  },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CapitalRequestsTable;
