// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getExercisesBodyparts } from '../../../redux/exercises/exerciseOperations';
// import Pagination from '../Pagination';
// import { WrapperPagination } from './BodyParts.styled';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';

// const BodyParts = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { bodyparts } = useSelector(state => state.exercises);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getExercisesBodyparts());
//   }, [dispatch]);

//   function perPage() {
//     let exePerPage;
//     if (window.matchMedia('(min-width: 1440px)').matches) {
//       exePerPage = 10;
//     } else {
//       exePerPage = 9;
//     }

//     return exePerPage;
//   }

//   const lastExeIndex = currentPage * perPage();
//   const firstExeIndex = lastExeIndex - perPage();
//   const allExersise = bodyparts.length;

//   function arrayPerPage() {
//     const currentExe = bodyparts.slice(firstExeIndex, lastExeIndex);
//     return currentExe;
//   }

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <>
//       <ExercisesSubcategoriesList arr={arrayPerPage()} />
//       <WrapperPagination>
//         {allExersise !== perPage() && (
//           <Pagination
//             exePerPage={perPage()}
//             paginate={paginate}
//             totalExe={bodyparts.length}
//             currentPage={currentPage}
//           />
//         )}
//       </WrapperPagination>
//     </>
//   );

//   // return <div>ExercisesSubcategoriesList</div>;
// };

// export default BodyParts;
//*=================================================================

import React, { useState } from 'react';
import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';
import Pagination from '../Pagination';
import { WrapperPagination } from './BodyParts.styled';

// TEMPORARY
const exeFilters = [
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628d',
    },
    filter: 'Body parts',
    name: 'lower legs',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_legs_thafch.jpg',
  },
  {
    _id: {
      $oid: '650f35ece3f5522fc639628c',
    },
    filter: 'Body parts',
    name: 'lower arms',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
  },
];
// TEMPORARY

const BodyParts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function perPage() {
    let exePerPage;
    if (window.matchMedia('(min-width: 1440px)').matches) {
      exePerPage = 10;
    } else {
      exePerPage = 9;
    }
    return exePerPage;
  }

  const lastExeIndex = currentPage * perPage();
  const firstExeIndex = lastExeIndex - perPage();
  const allExersise = exeFilters.length;

  const arrayPerPage = () => exeFilters.slice(firstExeIndex, lastExeIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <ExercisesSubcategoriesList arr={arrayPerPage()} />
      <WrapperPagination>
        <Pagination
          exePerPage={perPage()}
          paginate={paginate}
          totalExe={allExersise}
          currentPage={currentPage}
        />
      </WrapperPagination>
    </>
  );
};

export default BodyParts;

//*=================================================================
// import React from 'react';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';

// // TEMPORARY
// const exeFilters = [
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639628c',
//     },
//     filter: 'Body parts',
//     name: 'lower arms',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/lower_arms_hvwarx.jpg',
//   },
// ];
// // TEMPORARY

// const BodyParts = () => {
//   return <ExercisesSubcategoriesList arr={exeFilters} />;
// };

// export default BodyParts;
