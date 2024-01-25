import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectDiaryDate } from '../../../redux/diary/diarySelectors';

import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';
import { addProduct } from '../../../redux/products/productOperations';
import {
  selectProductToAdd,
  setCaloriesByUser,
  setProductToAdd,
} from '../../../redux/products/productSlice';
import {
  StyledBtnContainer,
  StyledForm,
  StyledGramsContainer,
  StyledGramsInput,
  StyledInputContainer,
  StyledNameInput,
  StyledTextAmount,
  StyledTextCalories,
  StyledTextGrams,
} from './AddProductForm.styled';

const AddProductForm = () => {
  const { t } = useTranslation();
  const [grams, setGrams] = useState(null);
  const [hasGramsInputFocus, setHasGramsInputFocus] = useState(false);

  const dispatch = useDispatch();

  const productToAdd = useSelector(selectProductToAdd);
  const currentDate = useSelector(selectDiaryDate);

  const handleChangeGrams = ({ target: { value } }) => {
    setGrams(Number(value));
  };

  const caloriesByUsersGrams = Math.round(
    (productToAdd.calories * grams) / 100
  );

  // const date = dayjs();
  // const formattedDate = dayjs(date).format('DD.MM.YYYY');

  const productToAddToDiary = {
    productId: productToAdd._id,
    date: currentDate,
    weight: grams,
  };

  const handleAddToDiaryBtn = e => {
    e.preventDefault();
    dispatch(addProduct(productToAddToDiary));
    dispatch(setCaloriesByUser(caloriesByUsersGrams));
  };

  const handleCloseAddModal = () => {
    dispatch(setProductToAdd(null));
  };

  return (
    <BasicModalWindow onClose={handleCloseAddModal}>
      <StyledForm onSubmit={handleAddToDiaryBtn}>
        <StyledInputContainer>
          <label>
            <StyledNameInput
              type="text"
              defaultValue={
                productToAdd.title[0].toUpperCase() +
                productToAdd.title.slice(1)
              }
              readOnly
            />
          </label>
          <StyledGramsContainer $hasFocus={hasGramsInputFocus}>
            <label>
              <StyledGramsInput
                type="number"
                onChange={handleChangeGrams}
                required
                onFocus={() => setHasGramsInputFocus(true)}
                onBlur={() => setHasGramsInputFocus(false)}
              />
            </label>
            <StyledTextGrams>{t('products.add_product.grams')}</StyledTextGrams>
          </StyledGramsContainer>
        </StyledInputContainer>
        <StyledTextCalories>
          {t('products.add_product.calories')}:
          <StyledTextAmount>
            {!grams ? 0 : caloriesByUsersGrams}
          </StyledTextAmount>
        </StyledTextCalories>
        <StyledBtnContainer>
          <Button type="submit" paddingY={12} paddingX={29} fontSize={16}>
            {t('products.add_product.add')}
          </Button>
          <Button
            type="button"
            paddingY={12}
            paddingX={36}
            fontSize={16}
            secondary
            onClick={handleCloseAddModal}
          >
            {t('products.add_product.cancel')}
          </Button>
        </StyledBtnContainer>
      </StyledForm>
    </BasicModalWindow>
  );
};

export default AddProductForm;
