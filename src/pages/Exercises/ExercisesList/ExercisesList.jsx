// import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getExercisesFilter } from '../../../redux/exercises/exerciseOperations';
// import {
//   NameExercises,
//   WrapperExercises,
//   ButtonGoBack,
//   LinkBtn,
//   IconWrapperBack,
//   WrapperNav,
//   DesktopBackgroundContainer,
// } from './ExercisesList.styled';
// import { ChaptersWrapper, LinkStyled } from '../Exercises.styled';

// import ExercisesItem from '../ExercisesItem';
// import SectionTemplate from '../SectionTemplate';
// import ChapterTemplate from '../ChapterTemplate';

// import Loader from '../../../components/Loader';

// const ExercisesList = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const backLinkLocation = useRef(location.state?.from ?? '/exercises');
//   const backLinkBodyparts = useRef(
//     location.state?.from ?? '/exercises/body parts'
//   );
//   const backLinkMuscles = useRef(location.state?.from ?? '/exercises/muscles');
//   const backLinkEquipment = useRef(
//     location.state?.from ?? '/exercises/equipment'
//   );
//   // const { exeFilter } = useSelector(state => state.exercises);
//   const { exeFilter, isLoading } = useSelector(state => state.exercises);

//   const params = useParams();
//   const current = params.id;

//   useEffect(() => {
//     const paramsExe = {
//       filter: params.filter,
//       name: params.id,
//     };
//     if (paramsExe) {
//       dispatch(getExercisesFilter(paramsExe));
//     }
//   }, [dispatch, params.filter, params.id]);

//   const ucFirst = str => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
//   };

//   return (
//     <SectionTemplate>
//       <ButtonGoBack>
//         <IconWrapperBack>
//           <use
//             xlinkHref={
//               process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-arrow'
//             }
//           ></use>
//         </IconWrapperBack>
//         <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
//       </ButtonGoBack>
//       <DesktopBackgroundContainer>
//         <WrapperNav>
//           {isLoading && <Loader />}
//           <NameExercises>{ucFirst(current)}</NameExercises>

//           <ChaptersWrapper>
//             <li>
//               <LinkStyled to={backLinkBodyparts.current}>
//                 <ChapterTemplate>Body parts</ChapterTemplate>
//               </LinkStyled>
//             </li>
//             <li>
//               <LinkStyled to={backLinkMuscles.current}>
//                 <ChapterTemplate>Muscles</ChapterTemplate>
//               </LinkStyled>
//             </li>
//             <li>
//               <LinkStyled to={backLinkEquipment.current}>
//                 <ChapterTemplate>Equipment</ChapterTemplate>
//               </LinkStyled>
//             </li>
//           </ChaptersWrapper>
//         </WrapperNav>

//         <WrapperExercises>
//           {exeFilter.data?.map(
//             ({
//               bodyPart,
//               name,
//               target,
//               _id,
//               burnedCalories,
//               equipment,
//               gifUrl,
//               time,
//             }) => {
//               return (
//                 <ExercisesItem
//                   key={_id}
//                   calories={burnedCalories}
//                   target={ucFirst(target)}
//                   NameBodyPart={ucFirst(bodyPart)}
//                   name={ucFirst(name)}
//                   equipment={equipment}
//                   gifUrl={gifUrl}
//                   burnedCalories={burnedCalories}
//                   exeId={_id}
//                   time={time}
//                 />
//               );
//             }
//           )}
//         </WrapperExercises>
//       </DesktopBackgroundContainer>
//     </SectionTemplate>
//   );
// };

// export default ExercisesList;
//*=================================================================

import { useEffect, useRef } from 'react';
// import { useRef } from 'react';

import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  NameExercises,
  WrapperExercises,
  ButtonGoBack,
  LinkBtn,
  IconWrapperBack,
  WrapperNav,
  DesktopBackgroundContainer,
} from './ExercisesList.styled';
import { getExercisesFilter } from '../../../redux/exercises/exerciseOperations';

import { ChaptersWrapper, LinkStyled } from '../Exercises.styled';

import ExercisesItem from '../ExercisesItem';
import SectionTemplate from '../SectionTemplate';
import ChapterTemplate from '../ChapterTemplate';

// TEMPORARY
const exeList = [
  {
    _id: {
      $oid: '64f2458d6f67bc34bae4f906',
    },
    bodyPart: 'upper arms',
    equipment: 'dumbbell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0322.gif',
    name: 'dumbbell incline inner biceps curl',
    target: 'biceps',
    burnedCalories: 317,
    time: 3,
  },
  {
    _id: {
      $oid: '64f2458d6f67bc34bae4f973',
    },
    bodyPart: 'chest',
    equipment: 'dumbbell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0433.gif',
    name: 'dumbbell straight arm pullover',
    target: 'pectorals',
    burnedCalories: 262,
    time: 3,
  },
  {
    _id: {
      $oid: '64f2458d6f67bc34bae4f836',
    },
    bodyPart: 'upper legs',
    equipment: 'barbell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0074.gif',
    name: 'barbell rack pull',
    target: 'glutes',
    burnedCalories: 340,
    time: 3,
  },
  {
    _id: {
      $oid: '64f2458d6f67bc34bae4f9a9',
    },
    bodyPart: 'shoulders',
    equipment: 'kettlebell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0520.gif',
    name: 'kettlebell alternating press',
    target: 'delts',
    burnedCalories: 119,
    time: 3,
  },
  {
    _id: {
      $oid: '64f2458d6f67bc34bae4f973',
    },
    bodyPart: 'chest',
    equipment: 'dumbbell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0433.gif',
    name: 'dumbbell straight arm pullover',
    target: 'pectorals',
    burnedCalories: 262,
    time: 3,
  },
];
// TEMPORARY

const ExercisesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const backLinkBodyparts = useRef(
    location.state?.from ?? '/exercises/bodyparts'
  );
  const backLinkMuscles = useRef(location.state?.from ?? '/exercises/muscles');
  const backLinkEquipment = useRef(
    location.state?.from ?? '/exercises/equipment'
  );
  // const type = location.pathname.split('/exercises/')[1];
  const [type, name] = location.pathname.split('/exercises/')[1].split('/');
  // console.log('type', type);
  // console.log('filters', filters);

  useEffect(() => {
    const filters = { type, name };

    dispatch(getExercisesFilter(filters));
  }, [dispatch, name, type]);

  // Replaced exeFilter with exeList
  const exeFilter = { data: exeList };

  const params = useParams();
  const current = params.id;

  // Removed useEffect block

  const ucFirst = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <SectionTemplate>
      <ButtonGoBack>
        <IconWrapperBack>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-arrow'
            }
          ></use>
        </IconWrapperBack>
        <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
      </ButtonGoBack>
      <DesktopBackgroundContainer>
        <WrapperNav>
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
        </WrapperNav>
        <WrapperExercises>
          {exeFilter.data?.map(
            ({
              bodyPart,
              name,
              target,
              _id,
              burnedCalories,
              equipment,
              gifUrl,
              time,
            }) => {
              return (
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
              );
            }
          )}
        </WrapperExercises>
      </DesktopBackgroundContainer>
    </SectionTemplate>
  );
};

export default ExercisesList;
