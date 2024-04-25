import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
export default function Password({ show, onHide }) {
  const [oldPassword, setOldPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or other actions here

    // Reset the form after submission
    setOldPassword('');
    setCurrentPassword('');
    setConfirmPassword('');

    onHide(); // Close the modal
  };
  return (
    <div>
        <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="currentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='my-2'>
            Save 
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  )
}
