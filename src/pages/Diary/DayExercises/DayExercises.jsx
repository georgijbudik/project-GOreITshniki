import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import DeleteModal from '../DeleteModal';

const DayExercises = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { t } = useTranslation();
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
        <CardTitle> {t('diary.exercises.header')}</CardTitle>
        <WrapElem>
          <button
            onClick={() => {
              navigate('/exercises');
            }}
          >
            {t('diary.exercises.add')}
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
            <TitleTextTablet> {t('diary.exercises.body_part')}</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet> {t('diary.exercises.equipment')}</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet> {t('diary.exercises.name')}</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet> {t('diary.exercises.target')}</TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>
              {t('diary.exercises.burned_calories')}
            </TitleTextTablet>
          </li>
          <li>
            <TitleTextTablet>{t('diary.exercises.time')}</TitleTextTablet>
          </li>
        </TableHeaderTablet>
      ) : (
        <div></div>
      )}
      {exercises.length === 0 ? (
        <NotFoundMessage>{t('diary.exercises.not_found')}</NotFoundMessage>
      ) : (
        <ul>
          {exercises.map(({ exercise, burnedCalories, time }) => {
            return (
              <LiWrap key={exercise._id}>
                <ProdWrap>
                  <TopProdBlock>
                    <div>
                      <TitleText> {t('diary.exercises.body_part')}</TitleText>
                      <MainText>{exercise.bodyPart}</MainText>
                      <MainTextTablet>{exercise.bodyPart}</MainTextTablet>
                    </div>
                    <div>
                      <TitleText> {t('diary.exercises.equipment')}</TitleText>
                      <MainText>{exercise.equipment}</MainText>
                      <MainTextTablett>{exercise.equipment}</MainTextTablett>
                    </div>
                    <div>
                      <TitleText> {t('diary.exercises.name')}</TitleText>
                      <MainText>{exercise.name}</MainText>
                      <MainTextTablettt>{exercise.name}</MainTextTablettt>
                    </div>
                  </TopProdBlock>
                </ProdWrap>
                <BottomProdBlock>
                  <div>
                    <TitleText> {t('diary.exercises.target')}</TitleText>
                    <MainTextBottom>
                      {exercise.target.slice(0, 8) + '...'}
                    </MainTextBottom>
                  </div>
                  <div>
                    <TitleText>
                      {t('diary.exercises.burned_calories')}
                    </TitleText>
                    <MainTextBottom1>{burnedCalories}</MainTextBottom1>
                  </div>
                  <div>
                    <TitleText> {t('diary.exercises.time')}</TitleText>
                    <MainTextBottom2>{time}</MainTextBottom2>
                  </div>
                  <ButtonWrap>
                    <button
                      onClick={() => {
                        setDeleteModal(true);
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
                {deleteModal && (
                  <DeleteModal
                    onClose={() => {
                      setDeleteModal(false);
                    }}
                    onDelete={() => {
                      const data = { date, id: exercise._id };
                      handleDelete(data);
                    }}
                  />
                )}
              </LiWrap>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default DayExercises;
