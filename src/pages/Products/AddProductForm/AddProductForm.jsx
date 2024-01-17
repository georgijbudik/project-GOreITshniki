import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import dayjs from 'dayjs';
import {
  selectError,
  selectProductToAdd,
  setCaloriesByUser,
  setIsProductSuccesAdded,
  setProductToAdd,
} from '../../../redux/products/productSlice';
import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';

const AddProductForm = () => {
  const [grams, setGrams] = useState(null);

  const dispatch = useDispatch();

  const productToAdd = useSelector(selectProductToAdd);
  const error = useSelector(selectError);

  const handleChangeGrams = ({ target: { value } }) => {
    setGrams(Number(value));
  };

  const caloriesByUsersGrams = Math.round(
    (productToAdd.calories * grams) / 100
  );

  // const date = dayjs();
  // const formattedDate = dayjs(date).format('DD/MM/YYYY');
  // const productToAddToDiary = {
  //   product: productToAdd._id.$oid,
  //   date: formattedDate,
  //   amount: grams,
  //   calories: caloriesByUsersGrams,
  // };

  const handleAddToDiaryBtn = e => {
    e.preventDefault();
    // dispatch(addProduct(productToAddToDiary));
    if (error) {
      // notification 
      console.log('try again');
      return;
    }
    dispatch(setProductToAdd(null));
    dispatch(setCaloriesByUser(caloriesByUsersGrams));
    // TEMPORARY UNTIL POST IS READY
    dispatch(setIsProductSuccesAdded(true));
  };

  const handleCloseAddModal = () => {
    dispatch(setProductToAdd(null));
  };

  return (
    <BasicModalWindow onClose={handleCloseAddModal}>
      <form onSubmit={handleAddToDiaryBtn}>
        <label>
          <input
            type="text"
            defaultValue={
              productToAdd.title[0].toUpperCase() + productToAdd.title.slice(1)
            }
            readOnly
          />{' '}
        </label>
        <label>
          <input
            type="number"
            onChange={handleChangeGrams}
            placeholder="grams"
            required
          />
        </label>
        <p>
          Calories: <span>{!grams ? 0 : caloriesByUsersGrams}</span>
        </p>
        <Button type="submit">Add to diary</Button>
        <Button type="button" secondary onClick={handleCloseAddModal}>
          Cancel
        </Button>
      </form>
    </BasicModalWindow>
  );
};

export default AddProductForm;
