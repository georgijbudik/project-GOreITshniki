import React from 'react';
// import { useDispatch } from 'react-redux';
import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';
import { ProductsSection } from './Products.styled';
import TitlePage from 'components/TitlePage';
import { useSelector } from 'react-redux';
import AddProductForm from './AddProductForm';
import { selectIsProductSuccesAdded, selectProductToAdd } from '../../redux/products/productSlice';
import AddProductSuccess from './AddProductSuccess';
// import { fetchCategories, fetchProducts} from '../../redux/products/productOperations';

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

  return (
    <main> 
      {isProductSuccesAdded && <AddProductSuccess/>}
      {isProductToAdd && <AddProductForm/>}
      <ProductsSection>
        <TitlePage>Products</TitlePage>
        <ProductsFilters />
        <ProductsList />
      </ProductsSection>
    </main>
  );
};

export default Products;
