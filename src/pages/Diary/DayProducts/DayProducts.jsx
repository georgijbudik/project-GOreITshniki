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
    <Wrapper>
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
      {products.length === 0 && (
        <NotFoundMessage>Not found products</NotFoundMessage>
      )}
      <ul>
        {products.map(({ product }) => {
          return (
            <p>
              <span>{product.title}</span>
              <span> {product.category}</span>
              <span>{product.calories}</span>
              <span>{product.weight}</span>
              <button
                onClick={() => {
                  const data = { id: product._id, date };
                  handleProductDelete(data);
                }}
              >
                Delete
              </button>
            </p>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default DayProducts;
