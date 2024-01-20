import {
  Wrapper,
  CellProductsHeader,
  NotFoundMessage,
} from './DayProducts.styled';

import { useNavigate } from 'react-router-dom';

const DayProducts = () => {
  const navigate = useNavigate();
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
      <NotFoundMessage>Not found products</NotFoundMessage>
    </Wrapper>
  );
};

export default DayProducts;
