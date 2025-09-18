import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const UserCard = ({ user, onEdit, onDelete }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <Card
      actions={[
        <Button 
          type="text" 
          icon={<EditOutlined />} 
          onClick={() => onEdit(user)} 
          style={{ width: '100%', border: 'none' }}
        >
          Edit
        </Button>,
        <Button 
          type="text" 
          icon={<DeleteOutlined />} 
          onClick={() => onDelete(user.id)} 
          danger
          style={{ width: '100%', border: 'none' }}
        >
          Delete
        </Button>
      ]}
    >
      <Meta
        avatar={<Avatar src={avatarUrl} size={64} icon={<UserOutlined />} />}
        title={user.name}
        description={user.email}
      />
      <div style={{ marginTop: '16px' }}>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
    </Card>
  );
};

export default UserCard;