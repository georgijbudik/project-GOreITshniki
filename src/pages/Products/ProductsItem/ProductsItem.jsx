import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../../redux/global/globalSlice';
import { setProductToAdd } from '../../../redux/products/productSlice';
import {
  Container,
  DietText,
  DietContainer,
  RecomContainer,
  Circle,
  RecomText,
  TopContainer,
  RecomBtnContainer,
  AddBtn,
  AddSvg,
  Title,
  TitleCircle,
  TitleContainer,
  BottomContainer,
  BottomText,
  BottomAmount,
} from './ProductsItem.styled';

const ProductsItem = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddBtn = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setProductToAdd(product))
  };

  return (
    <li>
      <Container>
        <TopContainer>
          <DietContainer>
            <DietText>DIET</DietText>
          </DietContainer>
          <RecomBtnContainer>
            <RecomContainer>
              <Circle></Circle>
              <RecomText>Recommended</RecomText>
            </RecomContainer>
            <AddBtn type="button" onClick={handleAddBtn}>
              Add
              <AddSvg width="16" height="16" stroke="var(--accent-color)">
                <use
                  href={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-add'
                  }
                ></use>
              </AddSvg>
            </AddBtn>
          </RecomBtnContainer>
        </TopContainer>
        <TitleContainer>
          <TitleCircle>
            <svg width="16" height="16" fill="var(--main-text-color)">
              <use
                href={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-human'
                }
              ></use>
            </svg>
          </TitleCircle>
          <Title>{product.title}</Title>
        </TitleContainer>
        <BottomContainer>
          <BottomText>
            Calories: <BottomAmount>{product.calories}</BottomAmount>
          </BottomText>
          <BottomText>
            Category:{' '}
            <BottomAmount>
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </BottomAmount>
          </BottomText>
          <BottomText>
            Weight: <BottomAmount>{product.weight}</BottomAmount>
          </BottomText>
        </BottomContainer>
      </Container>
    </li>
  );
};

export default ProductsItem;
