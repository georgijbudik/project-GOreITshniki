import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCaloriesByUser,
  setCaloriesByUser,
  setIsProductSuccesAdded,
} from '../../../redux/products/productSlice';

const AddProductSuccess = () => {
  const dispatch = useDispatch();

  const caloriesByUser = useSelector(selectCaloriesByUser);

  const navigate = useNavigate();

  const handleCloseSuccessModal = () => {
    dispatch(setIsProductSuccesAdded(null));
    dispatch(setCaloriesByUser(null));
  };

  const handleToDiaryBtn = () => {
    handleCloseSuccessModal();
    navigate('/diary');
  };

  return (
    <BasicModalWindow onClose={handleCloseSuccessModal}>
      <div>
        <img src="" alt="Avocado" />
        <p>Well done</p>
        <p>
          Calories: <span>{caloriesByUser}</span>
        </p>
        <Button type="button" onClick={handleCloseSuccessModal}>
          Next product
        </Button>
        <button type="button" onClick={handleToDiaryBtn}>
          To the diary
          <svg width="16" height="16" stroke="var(--accent-color)">
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-add'
              }
            ></use>
          </svg>
        </button>
      </div>
    </BasicModalWindow>
  );
};

export default AddProductSuccess;
