import React, { useState } from 'react';
import './App.css'
const ContractDetails = () => {
  const [contract, setContract] = useState({
    price: 1000,
    startDate: '2024-04-15',
    endDate: '2024-04-30',
    paymentMethod: 'Credit Card',
    termsAndConditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    projectDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    signature: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract({ ...contract, [name]: value });
  };

  return (
    <div className="contract-details">
      <h2>Contract Details</h2>
      <div className="detail">
        <label>Price:</label>
        <span>{contract.price}</span>
      </div>
      <div className="detail">
        <label>Start Date:</label>
        <span>{contract.startDate}</span>
      </div>
      <div className="detail">
        <label>End Date:</label>
        <span>{contract.endDate}</span>
      </div>
      <div className="detail">
        <label>Payment Method:</label>
        <span>{contract.paymentMethod}</span>
      </div>
      <div className="detail">
        <label>Terms and Conditions:</label>
        <span>{contract.termsAndConditions}</span>
      </div>
      <div className="detail">
        <label>Project Details:</label>
        <span>{contract.projectDetails}</span>
      </div>
      <div className="form-group">
        <label>Signature:</label>
        <input
          type="text"
          name="signature"
          value={contract.signature}
          onChange={handleChange}
          placeholder="Enter signature"
        />
      </div>
    </div>
  );
};

export default ContractDetails;
