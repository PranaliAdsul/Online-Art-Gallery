import React from 'react';
import axios from 'axios';
import { Card, Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddArtwork = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/artworks.json', values);
      // Handle successful submission
      console.log(response);
      form.resetFields();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Card title="Add Artwork">
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Artwork Name"
            rules={[{ required: true, message: 'Please input the artwork name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Artist Avatar"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Please select an avatar!' }]}
          >
            <Upload name="avatar" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
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
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="description"
            label="Artwork Description"
            rules={[{ required: true, message: 'Please input the artwork description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Artwork
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddArtwork;