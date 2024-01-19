import { useSelector } from 'react-redux';

import ProductsItem from '../ProductsItem';
import { selectProducts } from '../../../redux/products/productSlice';
import {
  StyledList,
  StyledContainerNoResults,
  StyledTextNoResults,
  StyledTextTryAgain,
  StyledTextNoResultsRed,
} from './ProductsList.styled';

const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <>
      {products.length === 0 && (
        <StyledContainerNoResults>
          <StyledTextNoResults>
            <StyledTextNoResultsRed>
              Sorry, no results were found
            </StyledTextNoResultsRed>{' '}
            for the product filters you selected. You may want to consider other
            search options to find the product you want. Our range is wide and
            you have the opportunity to find more options that suit your needs.
          </StyledTextNoResults>
          <StyledTextTryAgain>
            Try changing the search parameters.
          </StyledTextTryAgain>
        </StyledContainerNoResults>
      )}
      {products.length > 0 && (
        <StyledList>
          {products.map(product => (
            <ProductsItem key={product._id} product={product} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default ProductsList;
