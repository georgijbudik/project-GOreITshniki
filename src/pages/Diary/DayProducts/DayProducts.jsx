import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/diary/diaryOperations';
import {
  selectDiaryProducts,
  selectDiaryDate,
} from '../../../redux/diary/diarySelectors';
import { useNavigate } from 'react-router-dom';

import {
  Wrapper,
  CellProductsHeader,
  NotFoundMessage,
  ProdWrap,
  TopProdBlock,
  BottomProdBlock,
  TitleText,
  TitleTextTablet,
  TableHeaderTablet,
  MainText,
  MainTextTablet,
  MainTextTablett,
  MainTextBottom,
  ButtonWrap,
  LiWrap,
} from './DayProducts.styled';

const DayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectDiaryProducts);

  const date = useSelector(selectDiaryDate);

  // const dayInfo = useSelector(selectDayInfo);
  // console.log(dayInfo);
  const navigate = useNavigate();
  const handleProductDelete = data => {
    console.log(data);
    dispatch(deleteProduct(data));
  };

  return (
    <Wrapper noExercises={products.length > 0}>
      <CellProductsHeader>
        <div>Products</div>
        <div>
          <button
            onClick={() => {
              navigate('/products');
            }}
          >
            Add product
          </button>
          <svg>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-arrow_OMG'
              }
            />
          </svg>
        </div>
      </CellProductsHeader>
      {products.length > 0 ? (
        <TableHeaderTablet>
          <li>
            <TitleTextTablet style={{ width: '212px' }}>Title</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet style={{ width: '132px' }}>
              Category
            </TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet style={{ width: '98px' }}>
              Calories
            </TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet style={{ width: '98px' }}>Weight</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Recommend</TitleTextTablet>
          </li>
        </TableHeaderTablet>
      ) : (
        <div></div>
      )}
      {products.length === 0 ? (
        <NotFoundMessage>Not found products</NotFoundMessage>
      ) : (
        <ul>
          {' '}
          {products.map(({ product, consumedCalories }) => {
            return (
              <LiWrap>
                <ProdWrap>
                  <TopProdBlock>
                    <div>
                      <TitleText>Title</TitleText>
                      <MainText>{product.title}</MainText>
                      <MainTextTablet>{product.title}</MainTextTablet>
                    </div>
                    <div>
                      <TitleText>Category</TitleText>
                      <MainText> {product.category}</MainText>
                      <MainTextTablett>{product.category}</MainTextTablett>
                    </div>
                  </TopProdBlock>
                  <BottomProdBlock>
                    <div>
                      <TitleText>Calories</TitleText>
                      <MainTextBottom>{product.calories}</MainTextBottom>
                    </div>
                    <div>
                      <TitleText>Weight</TitleText>
                      <MainTextBottom>{product.weight}</MainTextBottom>
                    </div>
                    <div>
                      <TitleText>Recommend</TitleText>
                      <MainTextBottom>Yes</MainTextBottom>
                    </div>
                    <ButtonWrap>
                      <button
                        onClick={() => {
                          const data = { id: product._id, date };
                          handleProductDelete(data);
                        }}
                      >
                        <svg>
                          <use
                            xlinkHref={
                              process.env.PUBLIC_URL +
                              '/images/sprite/sprite.svg#icon-trash-03_OMG'
                            }
                          />
                        </svg>
                      </button>
                    </ButtonWrap>
                  </BottomProdBlock>
                </ProdWrap>
              </LiWrap>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default DayProducts;
