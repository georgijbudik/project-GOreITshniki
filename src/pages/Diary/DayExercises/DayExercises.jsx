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
  TopProdBlock,
  BottomProdBlock,
  TitleText,
  TitleTextTablet,
  TableHeaderTablet,
  MainText,
  MainTextBottom,
  MainTextBottom1,
  MainTextBottom2,
  MainTextTablet,
  MainTextTablett,
  ButtonWrap,
  LiWrap,
  ProdWrap,
  MainTextTablettt,
} from './DayExercises.styled';

import { useNavigate } from 'react-router-dom';
import { CardTitle } from '../DayProducts/DayProducts.styled';

const DayExercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(selectDiaryExercises);
  const date = useSelector(selectDiaryDate);
  const navigate = useNavigate();

  const handleDelete = data => {
    dispatch(deleteExercise(data));
  };

  return (
    <Wrapper $noexercises={exercises.length > 0}>
      <CellExercisesHeader>
        <CardTitle>Execrcises</CardTitle>
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
      {exercises.length > 0 ? (
        <TableHeaderTablet>
          <li>
            <TitleTextTablet>Body Part</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Body weight</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Name</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Calories</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Weight</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>Recommend</TitleTextTablet>
          </li>
        </TableHeaderTablet>
      ) : (
        <div></div>
      )}
      {exercises.length === 0 ? (
        <NotFoundMessage>Not found exercises</NotFoundMessage>
      ) : (
        <ul>
          {exercises.map(({ exercise }) => {
            return (
              <LiWrap key={exercise._id}>
                <ProdWrap>
                  <TopProdBlock>
                    <div>
                      <TitleText>Body Part</TitleText>
                      <MainText>{exercise.bodyPart}</MainText>
                      <MainTextTablet>{exercise.bodyPart}</MainTextTablet>
                    </div>
                    <div>
                      <TitleText>Equipment</TitleText>
                      <MainText>{exercise.equipment}</MainText>
                      <MainTextTablett>{exercise.equipment}</MainTextTablett>
                    </div>
                    <div>
                      <TitleText>Name</TitleText>
                      <MainText>{exercise.name}</MainText>
                      <MainTextTablettt>{exercise.name}</MainTextTablettt>
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
                    <MainTextBottom1>{exercise.burnedCalories}</MainTextBottom1>
                  </div>
                  <div>
                    <TitleText>Time</TitleText>
                    <MainTextBottom2>{exercise.time}</MainTextBottom2>
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
      )}
    </Wrapper>
  );
};

export default DayExercises;
