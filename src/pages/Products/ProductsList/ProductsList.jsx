import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchProducts } from '../../../redux/products/productOperations';
import ProductsItem from '../ProductsItem';
import {
  selectHasMore,
  selectPage,
  selectProducts,
} from '../../../redux/products/productSlice';
import {
  StyledList,
  StyledContainerNoResults,
  StyledTextNoResults,
  StyledTextTryAgain,
  StyledTextNoResultsRed,
  StyledContainer,
} from './ProductsList.styled';

const ProductsList = () => {
  const products = useSelector(selectProducts);

  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const elementRef = useRef(null);

  const searchFromParams = searchParams.get('search') ?? '';
  const categoryFromParams = searchParams.get('category') ?? '';
  const recommendationFromParams = searchParams.get('recommendation') ?? '';

  const fetchMoreProducts = useCallback(async () => {
    if (hasMore) {
      dispatch(
        fetchProducts({
          search: searchFromParams,
          category: categoryFromParams,
          recommendation: recommendationFromParams,
          page: page,
          limit: 10,
        })
      );
    }
  }, [
    dispatch,
    searchFromParams,
    categoryFromParams,
    recommendationFromParams,
    page,
    hasMore,
  ]);

  useEffect(() => {
    const onIntersection = entries => {
      if (entries[0].isIntersecting) {
        fetchMoreProducts();
      }
    };
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(onIntersection, options);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products, fetchMoreProducts]);

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
        <StyledContainer>
          <StyledList>
            {products.map(product => (
              <ProductsItem key={product._id} product={product} />
            ))}
          </StyledList>
          <div ref={elementRef}></div>
        </StyledContainer>
      )}
    </>
  );
};

export default ProductsList;
