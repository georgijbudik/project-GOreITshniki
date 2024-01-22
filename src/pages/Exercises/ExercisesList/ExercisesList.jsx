import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { getExercisesFilter } from '../../../redux/exercises/exerciseOperations';
import {
  NameExercises,
  WrapperExercises,
  ButtonGoBack,
  LinkBtn,
  IconWrapperBack,
  WrapperNav,
  DesktopBackgroundContainer,
} from './ExercisesList.styled';
import { ChaptersWrapper, LinkStyled } from '../Exercises.styled';

import ExercisesItem from '../ExercisesItem';
import SectionTemplate from '../SectionTemplate';
import ChapterTemplate from '../ChapterTemplate';
import {
  clearExeciseFilter,
  setPage,
  setLoading,
} from '../../../redux/exercises/exerciseSlice';

const ExercisesList = () => {
  const dispatch = useDispatch();
  const { exeFilter, page, isLoading } = useSelector(state => state.exercises);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const backLinkBodyparts = useRef(
    location.state?.from ?? '/exercises/bodyparts'
  );
  const backLinkMuscles = useRef(location.state?.from ?? '/exercises/muscles');
  const backLinkEquipment = useRef(
    location.state?.from ?? '/exercises/equipment'
  );
  const [type, name] = location.pathname.split('/exercises/')[1].split('/');
  const params = useParams();
  const current = params.id;

  const exercisesListRef = useRef(null);

  const intersectionRef = useRef(null);

  useEffect(() => {
    const filters = { type, name };

    dispatch(getExercisesFilter(filters));
    return () => {
      dispatch(clearExeciseFilter());
    };
  }, [dispatch, type, name]);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const fetchMoreExercises = async () => {
      if (exeFilter.length % 10 === 0 && !isLoading) {
        dispatch(setLoading(true));
        dispatch(setPage());
        const filters = { type, name, page: page + 1 };
        await dispatch(getExercisesFilter(filters));
        dispatch(setLoading(false));
      }
    };

    const onIntersection = entries => {
      if (entries[0].isIntersecting) {
        fetchMoreExercises();
      }
    };
    const observer = new IntersectionObserver(onIntersection, options);
    if (observer && intersectionRef.current && !isLoading) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [exeFilter, dispatch, type, name, page, isLoading]);

  const ucFirst = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <SectionTemplate>
      <ButtonGoBack
        onClick={() => {
          dispatch(clearExeciseFilter());
        }}
      >
        <IconWrapperBack>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-arrow'
            }
          ></use>
        </IconWrapperBack>
        <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
      </ButtonGoBack>
      <DesktopBackgroundContainer></DesktopBackgroundContainer>
      <WrapperNav>
        {isLoading && <Loader />}
        <NameExercises>{ucFirst(current)}</NameExercises>

        <ChaptersWrapper>
          <li>
            <LinkStyled to={backLinkBodyparts.current}>
              <ChapterTemplate>Body parts</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={backLinkMuscles.current}>
              <ChapterTemplate>Muscles</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={backLinkEquipment.current}>
              <ChapterTemplate>Equipment</ChapterTemplate>
            </LinkStyled>
          </li>
        </ChaptersWrapper>
      </WrapperNav>{' '}
      <WrapperExercises ref={exercisesListRef}>
        {exeFilter.map(
          ({
            bodyPart,
            name,
            target,
            _id,
            burnedCalories,
            equipment,
            gifUrl,
            time,
          }) => (
            <ExercisesItem
              key={_id}
              calories={burnedCalories}
              target={ucFirst(target)}
              NameBodyPart={ucFirst(bodyPart)}
              name={ucFirst(name)}
              equipment={equipment}
              gifUrl={gifUrl}
              burnedCalories={burnedCalories}
              exeId={_id}
              time={time}
            />
          )
        )}
        {exeFilter.length > 0 && <div ref={intersectionRef}></div>}
      </WrapperExercises>
      {isLoading && <Loader />}
    </SectionTemplate>
  );
};

export default ExercisesList;
