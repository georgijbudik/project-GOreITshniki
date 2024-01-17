import {
  Wrapper,
  CellExercisesHeader,
  NotFoundMessage,
} from './DayExercises.styled';

const DayExercises = () => {
  return (
    <Wrapper>
      <CellExercisesHeader>
        <div>Execrcises</div>
        <div>
          <a href="http://www.google.com">Add product</a>
          <svg>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-arrow_OMG'
              }
            />
          </svg>
        </div>
      </CellExercisesHeader>
      <NotFoundMessage>Not found exercises</NotFoundMessage>
    </Wrapper>
  );
};

export default DayExercises;
