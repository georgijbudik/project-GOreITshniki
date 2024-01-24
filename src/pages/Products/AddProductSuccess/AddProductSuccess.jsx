import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        <StyledTextWellDone>
          {t('products.add_success.title')}
        </StyledTextWellDone>
        <StyledTextCalories>
          {t('products.add_success.calories')}:{' '}
          <StyledTextAmount>{caloriesByUser}</StyledTextAmount>
        </StyledTextCalories>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <StyledNextBtn type="button" onClick={handleCloseSuccessModal}>
            {t('products.add_success.next')}
          </StyledNextBtn>
          <StyledToDiaryBtn type="button" onClick={handleToDiaryBtn}>
            {t('products.add_success.diary')}
            <StyledToDiarySvg>
              <use
                href={
                  process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-add'
                }
              ></use>
            </StyledToDiarySvg>
          </StyledToDiaryBtn>
        </div>
      </StyledContainer>
    </BasicModalWindow>
  );
};

export default AddProductSuccess;
