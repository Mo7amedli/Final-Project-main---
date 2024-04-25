import React, { useState } from 'react';
import './Edit.css'; // Import the CSS file for styling

const SkillsList = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'HTML', isDeleted: false },
    { id: 2, name: 'CSS', isDeleted: false },
    { id: 3, name: 'JavaScript', isDeleted: false }
  ]);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editedSkillName, setEditedSkillName] = useState('');

  const handleEditSkill = (id, name) => {
    setEditingSkillId(id);
    setEditedSkillName(name);
  };

  const handleSaveSkill = (id) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, name: editedSkillName } : skill
    );
    setSkills(updatedSkills);
    setEditingSkillId(null);
  };

  const handleCancelEdit = () => {
    setEditingSkillId(null);
    setEditedSkillName('');
  };

  const handleDeleteSkill = (id) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, isDeleted: true } : skill
    );
    setSkills(updatedSkills);
  };

  const handleRestoreSkill = (id) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, isDeleted: false } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div className="skills-list-container">
      <h2 className="skills-list-heading">Skills List</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Skill Name</th>
            <th>ID</th>
            <th>Actions</th>
            <th>Is Deleted</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill.id}>
              <td>{index + 1}</td>
              <td>
                {editingSkillId === skill.id ? (
                  <input
                    type="text"
                    value={editedSkillName}
                    onChange={(e) => setEditedSkillName(e.target.value)}
                  />
                ) : (
                  skill.name
                )}
              </td>
              <td>{skill.id}</td>
              <td>
                {editingSkillId === skill.id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveSkill(skill.id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEditSkill(skill.id, skill.name)}>Edit</button>
                )}
                <button onClick={() => handleDeleteSkill(skill.id)} className='delete-button'>Delete</button>
                {skill.isDeleted && (
                  <button onClick={() => handleRestoreSkill(skill.id)} className='restore-button'>Restore</button>
                )}
              </td>
              <td>{skill.isDeleted ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsList;
