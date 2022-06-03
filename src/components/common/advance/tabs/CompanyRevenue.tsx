import Table, {
  TableCell,
  TableHeaderCell,
  TableRow,
} from "components/ui/Table";

const CompanyRevenue: React.FC<{ revenues: Array<Revenue> }> = ({
  revenues,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell>Name of Customer</TableHeaderCell>
            <TableHeaderCell>Customer ID</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Term Length</TableHeaderCell>
            <TableHeaderCell>Current Revenue Per Period</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Total Financed</TableHeaderCell>
            <TableHeaderCell>Total Available</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          {revenues.map((revenue) => (
            <TableRow key={revenue?.id}>
              <TableCell>{revenue?.name}</TableCell>
              <TableCell>{revenue?.id}</TableCell>
              <TableCell>{revenue?.type}</TableCell>
              <TableCell>{revenue?.status}</TableCell>
              <TableCell>{revenue?.term}</TableCell>
              <TableCell>{revenue?.revenue}</TableCell>
              <TableCell>{revenue?.currency}</TableCell>
              <TableCell>{revenue?.financed}</TableCell>
              <TableCell>{revenue?.available}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CompanyRevenue;
