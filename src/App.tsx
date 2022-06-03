import { Route, Routes } from "react-router-dom";

import AppLayout from "components/layout";
import Advance from "pages/advance";
import CapitalRequests from "pages/capital-requests";

function App() {
  return (
    <AppLayout>
      {() => (
        <Routes>
          <Route index element={<Advance />} />
          <Route path="/capital-requests/*" element={<CapitalRequests />} />
        </Routes>
      )}
    </AppLayout>
  );
}

export default App;
