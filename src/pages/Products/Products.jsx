import React from 'react';
// import { useDispatch } from 'react-redux';
import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';
import { ProductsSection } from './Products.styled';
import TitlePage from 'components/TitlePage';
import { useSelector } from 'react-redux';
import { selectIsModalOpen } from '../../redux/global/globalSlice';
import AddProductForm from './AddProductForm';
// import { fetchCategories, fetchProducts} from '../../redux/products/productOperations';

const Products = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <main> 
      {isModalOpen && <AddProductForm/>}
      <ProductsSection>
        <TitlePage>Products</TitlePage>
        <ProductsFilters />
        <ProductsList />
      </ProductsSection>
    </main>
  );
};

export default Products;
