import React, { useState } from 'react';
import './JobPost.css';

const EditJobPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: '',
    jobSkills: ''
  });

  const categories = ['Category 1', 'Category 2', 'Category 3']; // Example categories
  const skills = ['Skill 1', 'Skill 2', 'Skill 3']; // Example skills

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated job post data:', formData);
    // Add logic here to update the job post in your backend
  };

  return (
    <div className="edit-job-post-container">
      <h2>Edit Job Post</h2>
      <form onSubmit={handleSubmit} className="edit-job-post-form">
        <div>
          <label htmlFor="title" className="edit-job-post-label">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="edit-job-post-input" required />
        </div>

        <div>
          <label htmlFor="description" className="edit-job-post-label">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="edit-job-post-textarea" required />
        </div>

        <div>
          <label htmlFor="price" className="edit-job-post-label">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className="edit-job-post-input" required />
        </div>

        <div>
          <label htmlFor="duration" className="edit-job-post-label">Duration (in days):</label>
          <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} className="edit-job-post-input" required />
        </div>

        <div>
          <label htmlFor="category" className="edit-job-post-label">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleInputChange} className="edit-job-post-select" required>
            <option value="">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="jobSkills" className="edit-job-post-label">Job Skills:</label>
          <select id="jobSkills" name="jobSkills" value={formData.jobSkills} onChange={handleInputChange} className="edit-job-post-select" required >
          <option value="">Select Skill</option>
          {skills.map((skill, index) => (
                 <option key={index} value={skill}>{skill}</option>
            ))}
          </select>
        
        </div>

        <button type="submit" className="edit-job-post-submit">Update Job Post</button>
      </form>
    </div>
  );
};

export default EditJobPost;
