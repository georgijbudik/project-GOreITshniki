import React from 'react';
// import { useDispatch } from 'react-redux';
import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';
import { ProductsSection } from './Products.styled';
// import { fetchCategories, fetchProducts} from '../../redux/products/productOperations';

const Products = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <main>
      <ProductsSection>
        <h1>Products</h1>
        <ProductsFilters />
        <ProductsList />
      </ProductsSection>
    </main>
  );
};

export default Products;
