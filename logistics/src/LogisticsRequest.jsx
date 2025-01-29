import { useNavigate } from "react-router-dom";
import "./LogisticsRequest.css";

const LogisticsRequest = () => {
  const navigate = useNavigate();

  return (
    <div className="logistics-request">
      <div className="logistics-request-content">
        <div className="request-title">
          <h2>Logistics Request</h2>
          <p>Make a request for logistics.</p>
        </div>
        <button className="request-button" onClick={() => navigate("/logistics-form")}>
          Make Logistics Request
        </button>
      </div>
    </div>
  );
};

export default LogisticsRequest;