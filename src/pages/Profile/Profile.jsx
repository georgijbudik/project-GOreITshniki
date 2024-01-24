import './styled.css';
import UserCard from './UserCard';
import UserForm from './UserForm';

const Profile = () => {
  return (
    <div className="profile_container">
      <UserCard /> <UserForm />
    </div>
  );
};

export default Profile;
