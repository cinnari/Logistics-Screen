import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import LogisticsOverview from "./LogisticsOverview";
import LogisticsRequest from "./LogisticsRequest";
import ViewRequest from "./ViewRequests";
import LogisticsForm from "./LogisticsForm";

// creating a Home component to include all sections
const Home = () => {
  return (
    <div>
      <LogisticsOverview />
      <LogisticsRequest />
      <ViewRequest />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="workspace-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logistics-request" element={<LogisticsRequest />} />
          <Route path="/view-requests" element={<ViewRequest />} />
          <Route path="/logistics-form" element={<LogisticsForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
