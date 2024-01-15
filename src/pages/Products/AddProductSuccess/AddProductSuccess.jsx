import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../../../redux/global/globalSlice';
import { useNavigate } from 'react-router-dom';
import {
  selectCaloriesByUser,
  setCaloriesByUser,
} from '../../../redux/products/productSlice';

const AddProductSuccess = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const caloriesByUser = useSelector(selectCaloriesByUser);

  const handleNextProductBtn = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setCaloriesByUser(null));
  };

  const handleToDiaryBtn = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setCaloriesByUser(null));
    navigate('/diary');
  };

  return (
    <BasicModalWindow>
      <div>
        <img src="" alt="Avocado" />
        <p>Well done</p>
        <p>
          Calories: <span>{caloriesByUser}</span>
        </p>
        <Button type="button" onClick={handleNextProductBtn}>
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
