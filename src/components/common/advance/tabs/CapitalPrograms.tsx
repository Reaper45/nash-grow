import Label from "components/ui/Label";
import Table, {
  TableCell,
  TableHeaderCell,
  TableRow,
} from "components/ui/Table";

const CapitalPrograms: React.FC<{ programs: Array<Program> }> = ({
  programs,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell>Name of Program</TableHeaderCell>
            <TableHeaderCell>Date Deployed</TableHeaderCell>
            <TableHeaderCell>Maturity</TableHeaderCell>
            <TableHeaderCell>Frequecy of Payment</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Total Disbursed</TableHeaderCell>
            <TableHeaderCell>Total Repayment</TableHeaderCell>
            <TableHeaderCell>Total paid</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          {programs.map((program) => (
            <TableRow key={program.id}>
              <TableCell>{program?.name}</TableCell>
              <TableCell>{program?.dateDeployed}</TableCell>
              <TableCell>{program?.maturity}</TableCell>
              <TableCell>{program?.frequecy}</TableCell>
              <TableCell>
                <Label
                  content={program?.status}
                  variant={program?.status === "Overdue" ? "error" : "success"}
                />
              </TableCell>
              <TableCell>{program?.disbursed}</TableCell>
              <TableCell>{program?.repayment}</TableCell>
              <TableCell>{program?.paid}</TableCell>
              <TableCell>{program?.balance}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CapitalPrograms;
