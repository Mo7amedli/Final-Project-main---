import React, { useState } from 'react';
import './JobPost.css'; // Import CSS file

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    categoryId: '',
    skills: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or perform other actions
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      title: '',
      description: '',
      price: '',
      duration: '',
      categoryId: '',
      skills: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="form-input" required />

        <label htmlFor="description" className="form-label">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="form-textarea" required />

        <label htmlFor="price" className="form-label">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className="form-input" required />

        <label htmlFor="duration" className="form-label">Duration (in days):</label>
        <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} className="form-input" required />

        <label htmlFor="categoryId" className="form-label">Category ID:</label>
        <input type="text" id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleInputChange} className="form-input" required />

        <label htmlFor="skills" className="form-label">Job Skills:</label>
        <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleInputChange} className="form-input" required placeholder='Enter skills separated by commas (e.g., HTML, CSS, JavaScript)'/>
        

        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
};

export default JobPostForm;
