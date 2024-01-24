import Loader from 'components/Loader';
import './styled.css';
import UserCard from './UserCard';
import UserForm from './UserForm';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';

const Profile = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="profile_container">
      <UserCard /> <UserForm />
    </div>
  );
};

export default Profile;
