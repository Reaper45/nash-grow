import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import AdvanceTabs from "components/common/advance/tabs";

const AdvanceStats = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
`;

const MainAction = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 0.75rem;
  color: ${(props) => props.theme.color.primary};
  padding: 1rem 2rem;
  border: solid 1px ${(props) => props.theme.color.secondary};
  border-radius: 8px;
  background: linear-gradient(
    107.21deg,
    rgba(255, 255, 255, 0.23) 2.38%,
    rgba(255, 255, 255, 0.07) 103.87%
  );

  span {
    font-size: 1rem;
  }
  a {
    background: #00e6bc;
    border-radius: 6px;
    padding: 8px 16px;
    text-decoration: none;
    color: ${(props) => props.theme.color.dark};
  }
`;

const Stats = styled("div")`
  border: 1px solid;
  border-radius: 8px;
  background: linear-gradient(
    107.21deg,
    rgba(255, 255, 255, 0.23) 2.38%,
    rgba(255, 255, 255, 0.07) 103.87%
  );
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  column-gap: 2.5rem;
`;

const Stat = styled("div")`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const stats: Array<{ value: string; title: string }> = [
  {
    value: "9.85%",
    title: "Financing Rate",
  },
  {
    value: "$10,000",
    title: "Available Limit",
  },
  {
    value: "$5,000",
    title: "Remaining Limit",
  },
  {
    value: "$3,000",
    title: "Term Limit",
  },
];

const revenues: Array<Revenue> = [
  {
    name: "Joram M",
    id: "BR6J0390",
    type: "Quarterly",
    status: "Available",
    term: "12 Months",
    revenue: "Kes 42,000",
    currency: "KES",
    financed: "-",
    available: "Ksh 100,000",
  },
  {
    name: "Steve A",
    id: "AE5J0334",
    type: "Quarterly",
    status: "Available",
    term: "12 Months",
    revenue: "$4,000",
    currency: "$",
    financed: "Ksh 200,000",
    available: "Ksh 500,000",
  },
  {
    name: "Anthony M",
    id: "GV5J0355",
    type: "Quarterly",
    status: "Available",
    term: "12 Months",
    revenue: "$4,300",
    currency: "£",
    financed: "-",
    available: "KES 890,000",
  },
  {
    name: "Justine E",
    id: "WD5J0334",
    type: "Semi Annual",
    status: "Available",
    term: "12 Months",
    revenue: "ksh 1,000",
    currency: "KES",
    financed: "-",
    available: "KES 10,000",
  },
  {
    name: "Kennedy M",
    id: "QW5J0307",
    type: "Quarterly",
    status: "Not Available",
    term: "0 Months",
    revenue: "ksh 40,000",
    currency: "KES",
    financed: "-",
    available: "KES 0",
  },
];

const programs: Array<Program> = [
  {
    id: "1",
    name: "Program 1",
    dateDeployed: "Pending",
    maturity: "4 April, 2023",
    frequecy: "Monthly",
    status: "On Time",
    disbursed: "Kes 85,000",
    repayment: "Ksh 100,000",
    paid: "Ksh 50,000",
    balance: "Ksh 50,000",
  },
  {
    id: "2",
    name: "Program 2",
    dateDeployed: "4 April, 2022",
    maturity: "4 April, 2023",
    frequecy: "Monthly",
    status: "Overdue",
    disbursed: "£ 400,000",
    repayment: "£ 400,000",
    paid: "£ 0",
    balance: "£ 0",
  },
  {
    id: "3",
    name: "Program 3",
    dateDeployed: "4 April, 2021",
    maturity: "4 April, 2023",
    frequecy: "Monthly",
    status: "On Time",
    disbursed: "$585,000",
    repayment: "$100,000",
    paid: "$300,000",
    balance: "$285,000",
  },
  {
    id: "4",
    name: "Program 4",
    dateDeployed: "Pending",
    maturity: "Pending",
    frequecy: "Monthly",
    status: "On Time",
    disbursed: "Kes 85,000",
    repayment: "Ksh 100,000",
    paid: "Ksh 50,000",
    balance: "Ksh 50,000",
  },
  {
    id: "5",
    name: "Program 5",
    dateDeployed: "4 April, 2022",
    maturity: "4 April, 2023",
    frequecy: "Monthly",
    status: "On Time",
    disbursed: "Kes 850,000",
    repayment: "Ksh 850,000",
    paid: "Ksh 850,000",
    balance: "Ksh 0",
  },
]

const Advance = () => {
  return (
    <div>
      <h1 className="page-title">Advance</h1>
      <p className="page-description">
        Tomorrow’s revenue today in any currency to fund your growth
      </p>

      <AdvanceStats>
        <Stats>
          {stats.map((stat) => (
            <Stat key={stat.title}>
              <b>{stat.value}</b>
              <span>{stat.title}</span>
            </Stat>
          ))}
        </Stats>
        <MainAction>
          <span>Need Funds</span>
          <Link to="/capital-requests">Request More Capital</Link>
        </MainAction>
      </AdvanceStats>

      <AdvanceTabs programs={programs} revenues={revenues} />
    </div>
  );
};

export default Advance;
