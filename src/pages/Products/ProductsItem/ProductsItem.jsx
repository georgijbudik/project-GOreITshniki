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
            <StyledDietText>DIET</StyledDietText>
          </StyledDietContainer>
          <StyledTopRightContainer>
            <StyledRecomContainer>
              <StyledCircle
                $isNotAllowed={isProductNotAllowedForUser}
              ></StyledCircle>
              {isProductNotAllowedForUser ? (
                <StyledRecomText>Not recommended</StyledRecomText>
              ) : (
                <StyledRecomText>Recommended</StyledRecomText>
              )}
            </StyledRecomContainer>
            <StyledAddBtn type="button" onClick={handleAddBtn}>
              Add
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
            Calories:{' '}
            <StyledBottomAmount>{product.calories}</StyledBottomAmount>
          </StyledBottomText>
          <StyledBottomText>
            Category:{' '}
            <StyledBottomAmount>
              {formatText(makeShortText(product.category))}
            </StyledBottomAmount>
          </StyledBottomText>
          <StyledBottomText>
            Weight: <StyledBottomAmount>{product.weight}</StyledBottomAmount>
          </StyledBottomText>
        </StyledBottomContainer>
      </StyledContainer>
    </li>
  );
};

export default ProductsItem;
