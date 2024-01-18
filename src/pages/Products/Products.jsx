import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitlePage from 'components/TitlePage';
import Loader from 'components/Loader';
import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import AddProductSuccess from './AddProductSuccess';
import {
  selectCategoryFromFilter,
  selectIsLoading,
  selectIsProductSuccesAdded,
  selectProductToAdd,
  selectRecommendationFromFilter,
  selectSearchFromFilter,
} from '../../redux/products/productSlice';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/productOperations';

import {
  StyledWrapper,
  StyledSection,
  StyledContainer,
} from './Products.styled';

const Products = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearchFromFilter);
  const category = useSelector(selectCategoryFromFilter);
  const recommendation = useSelector(selectRecommendationFromFilter);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        search,
        category,
        recommendation,
      })
    );
  }, [dispatch, search, category, recommendation]);

  const isProductToAdd = useSelector(selectProductToAdd);
  const isProductSuccesAdded = useSelector(selectIsProductSuccesAdded);
  const isLoading = useSelector(selectIsLoading);

  return (
    <main>
      {isLoading && <Loader />}
      {isProductSuccesAdded && <AddProductSuccess />}
      {isProductToAdd && <AddProductForm />}
      <StyledWrapper>
        <StyledSection>
          <StyledContainer>
            <TitlePage>Products</TitlePage>
            <ProductsFilters />
          </StyledContainer>
          <ProductsList />
        </StyledSection>
      </StyledWrapper>
    </main>
  );
};

export default Products;