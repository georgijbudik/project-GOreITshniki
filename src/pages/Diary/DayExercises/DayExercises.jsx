import { useSelector, useDispatch } from 'react-redux';
import {
  selectDiaryExercises,
  selectDiaryDate,
} from '../../../redux/diary/diarySelectors';
import { deleteExercise } from '../../../redux/diary/diaryOperations';

import {
  Wrapper,
  CellExercisesHeader,
  NotFoundMessage,
  WrapElem,
} from './DayExercises.styled';

import { useNavigate } from 'react-router-dom';

const DayExercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(selectDiaryExercises);
  const date = useSelector(selectDiaryDate);
  const navigate = useNavigate();

  const handleDelete = data => {
    dispatch(deleteExercise(data));
  };

  return (
    <Wrapper>
      <CellExercisesHeader>
        <div>Execrcises</div>
        <WrapElem>
          <button
            onClick={() => {
              navigate('/exercises');
            }}
          >
            Add product
          </button>
          <svg>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-arrow_OMG'
              }
            />
          </svg>
        </WrapElem>
      </CellExercisesHeader>
      <NotFoundMessage>Not found exercises</NotFoundMessage>
      <ul>
        {exercises.map(({ exercise }) => {
          return (
            <div key={exercise._id}>
              <p>{exercise.name}</p>
              <button
                onClick={() => {
                  const data = { date, id: exercise._id };
                  handleDelete(data);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default DayExercises;
