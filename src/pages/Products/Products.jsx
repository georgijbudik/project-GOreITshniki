import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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
// import { fetchCategories, fetchProducts} from '../../redux/products/productOperations';

import { StyledWrapper, StyledSection } from './Products.styled';

const Products = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

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
          <TitlePage>Products</TitlePage>
        <ProductsFilters />
        <ProductsList />
        </StyledSection>
      </StyledWrapper>
    </main>
  );
};

export default Products;
