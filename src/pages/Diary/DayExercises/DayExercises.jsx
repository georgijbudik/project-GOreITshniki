import {
  Wrapper,
  CellExercisesHeader,
  NotFoundMessage,
  WrapElem,
} from './DayExercises.styled';

import { useNavigate } from 'react-router-dom';

const DayExercises = () => {
  const navigate = useNavigate();

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
    </Wrapper>
  );
};

export default DayExercises;
