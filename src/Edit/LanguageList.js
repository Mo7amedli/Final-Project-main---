import React, { useState } from 'react';
import './Edit.css'; // Import the CSS file for styling

const LanguageList = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: 'Language 1', isDeleted: false },
    { id: 2, name: 'Language 2', isDeleted: false },
    { id: 3, name: 'Language 3', isDeleted: false }
  ]);
  const [editingLanguageId, setEditingLanguageId] = useState(null);
  const [editedLanguageName, setEditedLanguageName] = useState('');
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEditLanguage = (id, name, index) => {
    setEditingLanguageId(id);
    setEditedLanguageName(name);
    setEditedIndex(index + 1);
  };

  const handleSaveLanguage = (id) => {
    const updatedLanguages = languages.map(language =>
      language.id === id ? { ...language, name: editedLanguageName } : language
    );
    setLanguages(updatedLanguages);
    setEditingLanguageId(null);
    setEditedIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingLanguageId(null);
    setEditedLanguageName('');
    setEditedIndex(null);
  };

  const handleEditIndex = () => {
    const index = parseInt(editedIndex);
    if (!isNaN(index) && index >= 1 && index <= languages.length) {
      const languageToMove = languages.find(language => language.id === editingLanguageId);
      const filteredLanguages = languages.filter(language => language.id !== editingLanguageId);
      filteredLanguages.splice(index - 1, 0, languageToMove);
      setLanguages(filteredLanguages);
      setEditingLanguageId(null);
      setEditedIndex(null);
      setEditedLanguageName('');
    } else {
      alert('Index must be a number between 1 and the number of languages');
    }
  };

  const handleDeleteLanguage = (id) => {
    const updatedLanguages = languages.map(language =>
      language.id === id ? { ...language, isDeleted: true } : language
    );
    setLanguages(updatedLanguages);
  };

  const handleRestoreLanguage = (id) => {
    const updatedLanguages = languages.map(language =>
      language.id === id ? { ...language, isDeleted: false } : language
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div className="languages-list-container">
      <h2 className="languages-list-heading">Languages List</h2>
      <table className="languages-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Language Name</th>
            <th>ID</th>
            <th>Actions</th>
            <th>Is Deleted</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language, index) => (
            <tr key={language.id}>
              <td>{index + 1}</td>
              <td>
                {editingLanguageId === language.id ? (
                  <input
                    type="text"
                    value={editedLanguageName}
                    onChange={(e) => setEditedLanguageName(e.target.value)}
                  />
                ) : (
                  language.name
                )}
              </td>
              <td>{language.id}</td>
              <td>
                {editingLanguageId === language.id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveLanguage(language.id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-button" onClick={() => handleEditLanguage(language.id, language.name, index)}>Edit</button>
                  </>
                )}
                <button onClick={() => handleDeleteLanguage(language.id)} className='delete-button'>Delete</button>
                {editingLanguageId === language.id && (
                  <>
                    <input
                      type="number"
                      value={editedIndex}
                      onChange={(e) => setEditedIndex(e.target.value)}
                      placeholder="New Index"
                    />
                    <button onClick={handleEditIndex} className='edit-index-button'>Edit Index</button>
                  </>
                )}
              </td>
              <td>{language.isDeleted ? 'Yes' : 'No'}</td>
              <td>
                {!language.isDeleted && (
                  <button onClick={() => handleDeleteLanguage(language.id)} className='delete-button'>Delete</button>
                )}
                {language.isDeleted && (
                  <button onClick={() => handleRestoreLanguage(language.id)} className='restore-button'>Restore</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LanguageList;

