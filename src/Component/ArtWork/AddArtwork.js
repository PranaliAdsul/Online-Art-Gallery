import React from 'react';
import { Card, Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddArtwork = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Simulating a successful submission for demonstration
      message.success('Artwork added successfully');
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error('Failed to add artwork');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please fill in all required fields');
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Card title="Add Artwork" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            label="Artwork Name"
            rules={[{ required: true, message: 'Please input the artwork name!' }]}
          >
            <Input placeholder="Enter artwork name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Artwork Description"
            rules={[{ required: true, message: 'Please input the artwork description!' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter artwork description" />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Artist Avatar"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Please select an avatar!' }]}
          >
            <Upload name="avatar" listType="picture">
              <Button icon={<UploadOutlined />}>Upload Artist Photo</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="art"
            label="Artwork Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Please select an artwork image!' }]}
          >
            <Upload name="art" listType="picture">
              <Button icon={<UploadOutlined />}>Upload Artwork</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Add Artwork
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddArtwork;
