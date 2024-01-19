import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import TitlePage from 'components/TitlePage';
import Loader from 'components/Loader';
import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import AddProductSuccess from './AddProductSuccess';
import {
  selectIsLoading,
  selectIsProductSuccesAdded,
  selectProductToAdd,
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
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const searchFromParams = searchParams.get('search') ?? '';
  const categoryFromParams = searchParams.get('category') ?? '';
  const recommendationFromParams = searchParams.get('recommendation') ?? '';

  useEffect(() => {
    dispatch(
      fetchProducts({
        search: searchFromParams,
        category: categoryFromParams,
        recommendation: recommendationFromParams,
      })
    );
  }, [
    dispatch,
    searchFromParams,
    categoryFromParams,
    recommendationFromParams,
  ]);

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
