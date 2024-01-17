import {
  Wrapper,
  CellProductsHeader,
  NotFoundMessage,
} from './DayProducts.styled';

const DayProducts = () => {
  return (
    <Wrapper>
      <CellProductsHeader>
        <div>Products</div>
        <div>
          <a href="http://www.google.com">Add product</a>
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
