// import { useSelector } from 'react-redux';

import ProductsItem from '../ProductsItem';
// import { selectProducts } from '../../../redux/products/productSlice';
import {
  StyledList,
  StyledContainerNoResults,
  StyledTextNoResults,
  StyledTextTryAgain,
  StyledTextNoResultsRed,
} from './ProductsList.styled';

const ProductsList = () => {
  // const products = useSelector(selectProducts);

  // TEMPORARY
  const products = [
    {
      _id: {
        $oid: '5d51694902b2373622ff5773',
      },
      weight: 100,
      calories: 340,
      category: 'dairy',
      title: 'Danbo cheese',
      groupBloodNotAllowed: {
        1: true,
        2: true,
        3: false,
        4: false,
      },
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5b7f',
      },
      weight: 100,
      calories: 112,
      category: 'fish',
      title: 'marlin',
      groupBloodNotAllowed: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5726',
      },
      weight: 100,
      calories: 282,
      category: 'dairy',
      title: 'Cheese Artis for pan frying and grilling 45%',
      groupBloodNotAllowed: {
        1: true,
        2: true,
        3: false,
        4: false,
      },
    },
  ];
  // TEMPORARY

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
            <ProductsItem key={product._id.$oid} product={product} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default ProductsList;
