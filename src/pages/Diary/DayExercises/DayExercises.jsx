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
  // -
  TopProdBlock,
  BottomProdBlock,
  TitleText,
  MainText,
  MainTextBottom,
  ButtonWrap,
  LiWrap,
  ProdWrap,
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
    <Wrapper noExercises={exercises.length > 0}>
      <CellExercisesHeader>
        <div>Execrcises</div>
        <WrapElem>
          <button
            onClick={() => {
              navigate('/exercises');
            }}
          >
            Add exercise
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
      {exercises.length === 0 && (
        <NotFoundMessage>Not found exercises</NotFoundMessage>
      )}
      <ul>
        {exercises.map(({ exercise }) => {
          return (
            <LiWrap key={exercise._id}>
              <ProdWrap>
                <TopProdBlock>
                  <div>
                    <TitleText>Body Part</TitleText>
                    <MainText>{exercise.bodyPart}</MainText>
                  </div>
                  <div>
                    <TitleText>Equipment</TitleText>
                    <MainText>{exercise.equipment}</MainText>
                  </div>
                  <div>
                    <TitleText>Name</TitleText>
                    <MainText>{exercise.name}</MainText>
                  </div>
                </TopProdBlock>
              </ProdWrap>
              <BottomProdBlock>
                <div>
                  <TitleText>Target</TitleText>
                  <MainTextBottom>{exercise.target}</MainTextBottom>
                </div>
                <div>
                  <TitleText>Burned Calories</TitleText>
                  <MainTextBottom>{exercise.burnedCalories}</MainTextBottom>
                </div>
                <div>
                  <TitleText>Time</TitleText>
                  <MainTextBottom>{exercise.time}</MainTextBottom>
                </div>
                <ButtonWrap>
                  <button
                    onClick={() => {
                      const data = { date, id: exercise._id };
                      handleDelete(data);
                    }}
                  >
                    <svg>
                      <use
                        xlinkHref={
                          process.env.PUBLIC_URL +
                          '/images/sprite/sprite.svg#icon-trash-03_OMG'
                        }
                      />
                    </svg>
                  </button>
                </ButtonWrap>
              </BottomProdBlock>
            </LiWrap>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default DayExercises;
