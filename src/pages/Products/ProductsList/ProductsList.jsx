// import { useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem';
import { List } from './ProductsList.styled';
// import { selectProducts } from '../../../redux/products/productSlice';

const ProductsList = () => {
  // const products = useSelector(selectProducts);

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
  ];

  return (
    <List>
      {products.map(product => (
        <ProductsItem key={product._id.$oid} product={product} />
      ))}
    </List>
  );
};

export default ProductsList;
