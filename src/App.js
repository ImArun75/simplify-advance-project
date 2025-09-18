import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Typography } from 'antd';
import UserCard from './UserCard';
import UserEditModal from './UserEditModal';

const { Title } = Typography;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleUpdate = (values) => {
    setUsers(users.map(user => 
      user.id === editingUser.id ? { ...user, ...values } : user
    ));
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>User Profiles</Title>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {users.map(user => (
            <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
              <UserCard user={user} onEdit={handleEdit} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      )}
      <UserEditModal
        visible={isModalOpen}
        user={editingUser}
        onCancel={() => setIsModalOpen(false)}
        onSave={handleUpdate}
      />
    </div>
  );
}

export default App;