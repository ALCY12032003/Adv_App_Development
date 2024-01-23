import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const RoleSelector = ({ onSelectRole, selectedRole }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    onSelectRole(role);

    // Adding a delay of 5 seconds before navigating to the login page
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className={`app-selector ${selectedRole ? 'expanded' : ''}`}>
      <h2>Select Your Role</h2>
      <div className="role-buttons">
        <button onClick={() => handleRoleSelection('user')} className={selectedRole === 'user' ? 'custom-button active' : 'custom-button'}>
          🧑‍💻 User
        </button>
        <button onClick={() => handleRoleSelection('admin')} className={selectedRole === 'admin' ? 'custom-button active' : 'custom-button'}>
          👑 Admin
        </button>
      </div>
      {selectedRole && (
        <p className={`welcome-message ${selectedRole}`}>
          {selectedRole === 'user' ? 'Welcome, 🧑‍💻 User!' : 'Welcome, 👑 Admin!'}
        </p>
      )}
    </div>
  );
};

RoleSelector.propTypes = {
  onSelectRole: PropTypes.func.isRequired,
  selectedRole: PropTypes.string
};

const Welcome = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="app">
      <RoleSelector onSelectRole={setSelectedRole} selectedRole={selectedRole} />
    </div>
  );
};

export default Welcome;

