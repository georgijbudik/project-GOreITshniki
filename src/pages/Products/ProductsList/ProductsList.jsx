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
    {
      "_id": {
        "$oid": "5d51694902b2373622ff5726"
      },
      "weight": 100,
      "calories": 282,
      "category": "dairy",
      "title": "Cheese Artis for pan frying and grilling 45%",
      "groupBloodNotAllowed": {
        "1": true,
        "2": true,
        "3": false,
        "4": false
      }
    }
  ];

  return (
    <>
    {products.length === 0 && <div>
        <p>
          <span>Sorry, no results were found</span> for the product filters you
          selected. You may want to consider other search options to find the
          product you want. Our range is wide and you have the opportunity to
          find more options that suit your needs.
        </p>
        <p>Try changing the search parameters.</p>
      </div>}
      
      <List>
        {products.map(product => (
          <ProductsItem key={product._id.$oid} product={product} />
        ))}
      </List>
    </>
  );
};

export default ProductsList;
