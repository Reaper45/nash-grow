import { Route, Routes } from "react-router-dom";

import AppLayout from "components/layout";
import Advance from "pages/advance";
import CapitalRequests from "pages/capital-requests";
import Payout from "pages/capital-requests/Payout";
import Review from "pages/capital-requests/Review";
import CapitalRequestsView from "components/common/requests/view";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Advance />} />
        <Route path="/capital-requests" element={<CapitalRequests />}>
          <Route path="review" element={<Review />} />
          <Route path="payout" element={<Payout />} />
          <Route index element={<CapitalRequestsView />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
