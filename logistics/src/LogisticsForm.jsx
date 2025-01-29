import { useNavigate } from "react-router-dom";
import "./LogisticsForm.css";

const LogisticsForm = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <span className="arrow">&larr;</span> Back
      </button>

      <div className="logistics-form-wrapper">
        <div className="logistics-form-header">
          <h2>Logistics Request Form</h2>
          <p>Kindly fill out the form below to submit a logistics request.</p>
        </div>

        <div className="text-fields">
          {/* Module (Dropdown) */}
          <div className="form-group">
            <label htmlFor="module">Module</label>
            <select id="module" name="module">
              <option value="module1">Module 1</option>
              <option value="module2">Module 2</option>
              <option value="module3">Module 3</option>
            </select>
          </div>

          {/* Description (Text field) */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter description"></textarea>
          </div>

          {/* Request Date (Date picker) */}
          <div className="form-group">
            <label htmlFor="requestDate">Request Date</label>
            <input type="date" id="requestDate" name="requestDate" />
          </div>

          {/* Requested By (Text field) */}
          <div className="form-group">
            <label htmlFor="requestedBy">Requested By</label>
            <input type="text" id="requestedBy" name="requestedBy" placeholder="Enter your name" />
          </div>

          {/* Sent To (Dropdown) */}
          <div className="form-group">
            <label htmlFor="sentTo">Sent To</label>
            <select id="sentTo" name="sentTo">
              <option value="person1">Person 1</option>
              <option value="person2">Person 2</option>
              <option value="person3">Person 3</option>
            </select>
          </div>

          {/* Quantity (Text field) */}
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" placeholder="Enter quantity" />
          </div>
          <button className="send-request-button" onClick={() => navigate("")}>
          Send Request
        </button>
        </div>
      </div>
    </>
  );
};

export default LogisticsForm;
