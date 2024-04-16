import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button, message, Modal } from 'antd';
import './AddArtist.css';

const AddArtist = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    image_url: '',
  });
  const [loading, setLoading] = useState(false);
  

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/artists.json', formData);
      console.log(response);
      setFormData({
        name: '',
        bio: '',
        image_url: '',
      });
      setLoading(false);
      message.success('Artist added successfully');
    } catch (error) {
      setLoading(false);
      console.error(error);
      message.error('Failed to add artist. Please try again.');
    }
  };

  const handleConfirmSubmit = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to add this artist?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: handleFormSubmit,
    });
  };

  return (
    <div>
      <Card title="Add Artist" style={{ maxWidth: 600, margin: '0 auto' }}>
        <Form layout="vertical">
          <Form.Item label="Name" required>
            <Input name="name" value={formData.name} onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="Bio" required>
            <Input.TextArea name="bio" value={formData.bio} onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="Image URL" required>
            <Input name="image_url" value={formData.image_url} onChange={handleFormChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleConfirmSubmit} loading={loading}>
              Add Artist
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddArtist;
