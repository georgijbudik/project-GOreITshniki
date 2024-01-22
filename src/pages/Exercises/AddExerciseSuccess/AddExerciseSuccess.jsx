import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModalSuccess } from '../../../redux/exercises/exerciseSlice';

import BasicModalWindow from 'components/BasicModalWindow';

import {
  StyledAddExerciseSuccessWrapper,
  StyledAddExerciseSuccessInfo,
  StyledAddExerciseSuccessInfoItem,
  StyledAddExerciseSuccessNavigation,
  StyledAddExerciseSuccessNavigationButton,
  StyledAddExerciseSuccessNavigationIcon,
  StyledAddExerciseSuccessNavigationLink,
  StyledAddExerciseSuccessTitle,
} from './AddExerciseSuccess.styled';
const AddExerciseSuccess = ({ time, calories }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    dispatch(closeModalSuccess());
  };

  const handleNavigateDiary = () => {
    handleCloseModal();
    navigate('/diary');
  };

  return (
    <BasicModalWindow onClose={handleCloseModal}>
      <StyledAddExerciseSuccessWrapper>
        <img
          srcSet={
            process.env.PUBLIC_URL +
            '/images/mobile/exercisesSuccess-image@2x.png'
          }
          src={
            process.env.PUBLIC_URL + '/images/mobile/exercisesSuccess-image.png'
          }
          alt="Thumb Up"
          width="118"
          height="73"
        />

        <StyledAddExerciseSuccessInfo>
          <StyledAddExerciseSuccessTitle>
            Well done
          </StyledAddExerciseSuccessTitle>
          <StyledAddExerciseSuccessInfoItem>
            Your time: <span>{time}</span>
          </StyledAddExerciseSuccessInfoItem>
          <StyledAddExerciseSuccessInfoItem>
            Burned calories: <span>{calories}</span>
          </StyledAddExerciseSuccessInfoItem>
        </StyledAddExerciseSuccessInfo>

        <StyledAddExerciseSuccessNavigation>
          <StyledAddExerciseSuccessNavigationButton onClick={handleCloseModal}>
            Next exercise
          </StyledAddExerciseSuccessNavigationButton>
          <StyledAddExerciseSuccessNavigationLink onClick={handleNavigateDiary}>
            To the diary
            <StyledAddExerciseSuccessNavigationIcon>
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-arrow'
                }
              ></use>
            </StyledAddExerciseSuccessNavigationIcon>
          </StyledAddExerciseSuccessNavigationLink>
        </StyledAddExerciseSuccessNavigation>
      </StyledAddExerciseSuccessWrapper>
    </BasicModalWindow>
  );
};

export default AddExerciseSuccess;
