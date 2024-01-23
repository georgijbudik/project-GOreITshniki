import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BasicModalWindow from 'components/BasicModalWindow';
import {
  selectCaloriesByUser,
  setCaloriesByUser,
  setIsProductSuccesAdded,
} from '../../../redux/products/productSlice';
import {
  StyledContainer,
  StyledImgContainer,
  StyledNextBtn,
  StyledToDiarySvg,
  StyledTextAmount,
  StyledTextCalories,
  StyledTextWellDone,
  StyledToDiaryBtn,
} from './AddProductSuccess.styled';

const AddProductSuccess = () => {
  const dispatch = useDispatch();

  const caloriesByUser = useSelector(selectCaloriesByUser);

  const navigate = useNavigate();

  const handleCloseSuccessModal = () => {
    dispatch(setIsProductSuccesAdded(null));
    dispatch(setCaloriesByUser(null));
  };

  const handleToDiaryBtn = () => {
    handleCloseSuccessModal();
    navigate('/diary');
  };

  return (
    <BasicModalWindow onClose={handleCloseSuccessModal}>
      <StyledContainer>
        <StyledImgContainer>
          <img
            srcSet={
              process.env.PUBLIC_URL +
              '/images/mobile/productsSuccess-image@2x.png'
            }
            src={
              process.env.PUBLIC_URL +
              '/images/mobile/productsSuccess-image.png'
            }
            alt="Avocado"
            width="123"
            height="97"
          />
        </StyledImgContainer>
        <StyledTextWellDone>Well done</StyledTextWellDone>
        <StyledTextCalories>
          Calories: <StyledTextAmount>{caloriesByUser}</StyledTextAmount>
        </StyledTextCalories>
        <StyledNextBtn type="button" onClick={handleCloseSuccessModal}>
          Next product
        </StyledNextBtn>
        <StyledToDiaryBtn type="button" onClick={handleToDiaryBtn}>
          To the diary
          <StyledToDiarySvg
            width="16"
            height="16"
            stroke="rgba(239, 237, 232, 0.30)"
          >
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-add'
              }
            ></use>
          </StyledToDiarySvg>
        </StyledToDiaryBtn>
      </StyledContainer>
    </BasicModalWindow>
  );
};

export default AddProductSuccess;
