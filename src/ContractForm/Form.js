import React, { useState } from 'react';
import '.JobPost/.css'; // Import CSS file

const JobPostPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const jobPost = {
    title: 'Frontend Developer Needed',
    description: 'We are looking for a frontend developer to join our team.',
    price: '$3000',
    duration: '30',
    category: 'Web Development',
    skills: 'HTML, CSS, JavaScript'
  };

  const handleFavoriteClick = () => {
    setIsFavorited(prevState => !prevState);
  };

  return (
    <div className="job-post-container">
      <h2 className="job-post-title">{jobPost.title}</h2>
      <p className="job-post-detail"><span className="job-post-label">Description:</span> {jobPost.description}</p>
      <p className="job-post-detail"><span className="job-post-label">Price:</span> {jobPost.price}</p>
      <p className="job-post-detail"><span className="job-post-label">Duration:</span> {jobPost.duration} days</p>
      <p className="job-post-detail"><span className="job-post-label">Category:</span> {jobPost.category}</p>
      <p className="job-post-detail"><span className="job-post-label">Skills:</span> <span className="job-post-skills">{jobPost.skills}</span></p>

      <div className="job-post-buttons">
        <button className="hire-button">Hire</button>
        <button className="heart-button" onClick={handleFavoriteClick}>
          {isFavorited ? 'Is Favorited' : '\u2661 Favorite'}
        </button>
      </div>
    </div>
  );
};

export default JobPostPage;
