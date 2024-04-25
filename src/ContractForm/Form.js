import React, { useState } from 'react';
import './App.css'; // Import CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    termsAndConditions: false,
    price: '',
    startDate: '',
    endDate: '',
    paymentWay: '',
    jobPostId: '',
    clientId: '',
    freelancerId: '',
    paymentMethodId: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform further actions here like sending the form data to the server
  };

  return (
    <div className="form-container">
      <h2>Create Contract</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Payment Way:</label>
          <input
            type="text"
            name="paymentWay"
            value={formData.paymentWay}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Terms and Conditions</label>
            <textarea
              
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
            />
            
        
        </div>
        <div className="form-group">
          <label>ProjectDetails:</label>
          <input
            type="text"
            name="parojectdetails"
            value={formData.projectdetails}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Signature:</label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
          />
        </div>
      
        <button type="submit" className='form-button'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
