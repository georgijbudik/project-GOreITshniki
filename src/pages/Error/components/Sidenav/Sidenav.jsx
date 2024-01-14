import { useNavigate } from 'react-router-dom';

import ErrorInfo from '../ErrorInfo';

import Logo from 'components/Logo';
import Button from 'components/Button';

import { StyledSidenavWrapper, StyledSidenavContent } from './Sidenav.styled';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsModalOpen,
  setIsModalOpen,
} from '../../../../redux/global/globalSlice';

import AddExerciseForm from 'pages/Exercises/AddExerciseForm';

const Sidenav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <StyledSidenavWrapper>
      <Logo />

      <StyledSidenavContent>
        <div style={{ paddingBottom: '28px' }}>
          <ErrorInfo />
        </div>
        <Button
          onClick={() => {
            navigate('/');
          }}
          secondary
          paddingY={12}
          paddingX={40}
        >
          Go Home
        </Button>
        <Button
          secondary
          onClick={() => {
            dispatch(setIsModalOpen(true));
          }}
        >
          Open Modal
        </Button>

        {isModalOpen && <AddExerciseForm />}
      </StyledSidenavContent>
    </StyledSidenavWrapper>
  );
};

export default Sidenav;
