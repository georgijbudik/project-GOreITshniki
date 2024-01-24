import React, { useEffect } from 'react';
import './styled.css';
import UserCard from './UserCard';
import UserForm from './UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperations';
import { selectUserInfo } from '../../redux/auth/authSelectors';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  return (
    <div className="profile_container">
      <UserCard /> <UserForm />
    </div>
  );
};

export default Profile;
