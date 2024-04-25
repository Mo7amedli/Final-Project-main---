import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './FreelancersPage.css'; // Import CSS file

const FreelancersPage = () => {
  const freelancers = [
    {
      id: 1,
      profilePicture: 'https://via.placeholder.com/150',
      title: 'Frontend Developer',
      hourlyRate: '$50',
      fullName: 'John Doe',
      description: 'Experienced frontend developer with expertise in React, HTML, and CSS.'
    },
    {
      id: 2,
      profilePicture: 'https://via.placeholder.com/150',
      title: 'Graphic Designer',
      hourlyRate: '$40',
      fullName: 'Jane Smith',
      description: 'Creative graphic designer with a passion for branding and illustration.'
    },
    {
      id: 3,
      profilePicture: 'https://via.placeholder.com/150',
      title: 'Full Stack Developer',
      hourlyRate: '$60',
      fullName: 'David Johnson',
      description: 'Full stack developer specialized in MERN stack with 5 years of experience.'
    }
  ];

  return (
    <div className="freelancers-container">
      <h2 className="heading">Freelancers</h2>
      {freelancers.map(freelancer => (
        <div key={freelancer.id} className="freelancer">
          <img src={freelancer.profilePicture} alt="Profile" className="profile-picture" />
          <div className="freelancer-info">
            <div className="title-container">
              <FaBriefcase className="briefcase-icon" />
              <h3 className="title">{freelancer.title}</h3>
            </div>
            <p className="hourly-rate">Hourly Rate: {freelancer.hourlyRate}</p>
            <p className="full-name">{freelancer.fullName}</p>
            <p className="description">{freelancer.description}</p>
            <button className="hire-button">Hire</button>
            <button className="favorite-button">Favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreelancersPage;
