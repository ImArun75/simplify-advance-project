import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const UserEditModal = ({ visible, user, onCancel, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }, [user, form]);

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSave({ id: user.id, ...values });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="edit_user_form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the user\'s name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input a valid email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserEditModal;