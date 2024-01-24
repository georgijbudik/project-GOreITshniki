import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setProductToAdd } from '../../../redux/products/productSlice';
import { selectUserBlood } from '../../../redux/auth/authSelectors';

import {
  StyledContainer,
  StyledDietText,
  StyledDietContainer,
  StyledRecomContainer,
  StyledCircle,
  StyledRecomText,
  StyledTopContainer,
  StyledTopRightContainer,
  StyledAddBtn,
  StyledAddSvg,
  StyledTitle,
  StyledTitleCircle,
  StyledTitleContainer,
  StyledBottomContainer,
  StyledBottomText,
  StyledBottomAmount,
} from './ProductsItem.styled';

const ProductsItem = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userGroupBlood = useSelector(selectUserBlood);
  const isProductNotAllowedForUser =
    product.groupBloodNotAllowed[userGroupBlood];

  const formatText = text => {
    return text[0].toUpperCase() + text.slice(1);
  };

  const makeShortText = text => {
    return text.length > 10 ? text.slice(0, 10) + '...' : text;
  };

  const handleAddBtn = () => {
    dispatch(setProductToAdd(product));
  };

  return (
    <li>
      <StyledContainer>
        <StyledTopContainer>
          <StyledDietContainer>
            <StyledDietText>{t('products.product_item.diet')}</StyledDietText>
          </StyledDietContainer>
          <StyledTopRightContainer>
            <StyledRecomContainer>
              <StyledCircle
                $isNotAllowed={isProductNotAllowedForUser}
              ></StyledCircle>
              {isProductNotAllowedForUser ? (
                <StyledRecomText>
                  {t('products.product_item.not_recommended')}
                </StyledRecomText>
              ) : (
                <StyledRecomText>
                  {t('products.product_item.recommended')}
                </StyledRecomText>
              )}
            </StyledRecomContainer>
            <StyledAddBtn type="button" onClick={handleAddBtn}>
              {t('products.product_item.add')}

              <StyledAddSvg width="16" height="16" stroke="var(--accent-color)">
                <use
                  href={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-add'
                  }
                ></use>
              </StyledAddSvg>
            </StyledAddBtn>
          </StyledTopRightContainer>
        </StyledTopContainer>
        <StyledTitleContainer>
          <StyledTitleCircle>
            <svg width="16" height="16" fill="var(--main-text-color)">
              <use
                href={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-human'
                }
              ></use>
            </svg>
          </StyledTitleCircle>
          <StyledTitle>{formatText(product.title)}</StyledTitle>
        </StyledTitleContainer>
        <StyledBottomContainer>
          <StyledBottomText>
            {t('products.product_item.calories')}:{' '}
            <StyledBottomAmount>{product.calories}</StyledBottomAmount>
          </StyledBottomText>
          <StyledBottomText>
            {t('products.product_item.category')}:{' '}
            <StyledBottomAmount>
              {formatText(makeShortText(product.category))}
            </StyledBottomAmount>
          </StyledBottomText>
          <StyledBottomText>
            {t('products.product_item.weight')}:{' '}
            <StyledBottomAmount>{product.weight}</StyledBottomAmount>
          </StyledBottomText>
        </StyledBottomContainer>
      </StyledContainer>
    </li>
  );
};

export default ProductsItem;
