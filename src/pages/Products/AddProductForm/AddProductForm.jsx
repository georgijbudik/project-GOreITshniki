import BasicModalWindow from 'components/BasicModalWindow';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../../redux/global/globalSlice';
import Button from 'components/Button';

const AddProductForm = () => {
  const dispatch = useDispatch();

  const productToAdd = {
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
  };

  let gramsValue;

  const handleChangeGrams = ({ target: { value } }) => {
    gramsValue = value;
  };

  const caloriesByWeight = Math.round(
    (productToAdd.calories * gramsValue) / 100
  );

  const handleCancelClick = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <BasicModalWindow>
      <div>
        <label>
          <input
            type="text"
            defaultValue={
              productToAdd.title[0].toUpperCase() + productToAdd.title.slice(1)
            }
            readOnly
          />
          <input
            type="number"
            onChange={handleChangeGrams}
            placeholder="grams"
            required
          />
          <p>
            Calories: <span>{!gramsValue ? 0 : caloriesByWeight}</span>
          </p>
          <Button type="submit">Add to diary</Button>
          <Button type="button" secondary onClick={handleCancelClick}>
            Cancel
          </Button>
        </label>
      </div>
    </BasicModalWindow>
  );
};

export default AddProductForm;
