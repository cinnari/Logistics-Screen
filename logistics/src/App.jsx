import "./index.css"
import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./header"
import LogisticsOverview from "./LogisticsOverview";
import LogisticsRequest from "./LogisticsRequest";
import ViewRequest from "./ViewRequests";

const App = () => {
  return (
    <div className="workspace-wrapper">
      <Header />
      <LogisticsOverview />
      <LogisticsRequest />
      <ViewRequest />
    </div>
  );
};

export default App;
