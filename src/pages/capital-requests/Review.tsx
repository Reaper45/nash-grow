import CapitalRequestSummary from "components/common/requests/summary";
import CapitalRequestsTable from "components/common/requests/view/CapitalRequestsTable";
import FlexWrapper from "components/ui/FlexWrapper";
import { TableContainer } from "components/ui/Table";

const requests: Array<CapitalRequest> = [
  {
    id: "RG5J0390",
    name: "Joram M",
    type: "Quartaly",
    term: "12 Months",
    revenue: "$ 1,400",
    currency: "$",
    payout: "KES 100,000",
    payoutCurrency: "KES",
  },
  {
    id: "AD5J0391",
    name: "Steve A",
    type: "Semi Annual",
    term: "2 Months",
    revenue: "£ 1,000",
    currency: "£",
    payout: "KES 100,000",
    payoutCurrency: "KES",
  },
];

const selected = requests.map(request => request?.id)

const Review = () => {
  return (
    <div>
      <h1 className="page-title">Review Payout Request</h1>

      <FlexWrapper mt={2} align="flex-start">
        <TableContainer >
          <CapitalRequestsTable
            requests={requests}
            // onSelect={handleSelected}
            selected={selected}
          />
        </TableContainer>

         <CapitalRequestSummary />
      </FlexWrapper>
    </div>
  );
};

export default Review;
