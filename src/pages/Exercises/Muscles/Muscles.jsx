// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getExercisesMuscles } from '../../../redux/exercises/exerciseOperations';
// import Pagination from '../Pagination';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';

// const Muscles = () => {
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const { muscles } = useSelector(state => state.exercises);

//   useEffect(() => {
//     dispatch(getExercisesMuscles());
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

//   function arrayPerPage() {
//     const currentExe = muscles.slice(firstExeIndex, lastExeIndex);
//     return currentExe;
//   }

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <>
//       <ExercisesSubcategoriesList arr={arrayPerPage()} />
//       <Pagination
//         exePerPage={perPage()}
//         totalExe={muscles.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </>
//   );
// };

// export default Muscles;

//*=================================================================

// import React, { useState } from 'react';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';
// import Pagination from '../Pagination';

// // TEMPORARY
// const exeFilters = [
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962ba',
//     },
//     filter: 'Muscles',
//     name: 'levator scapulae',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962bd',
//     },
//     filter: 'Muscles',
//     name: 'serratus anterior',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962ba',
//     },
//     filter: 'Muscles',
//     name: 'levator scapulae',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962bd',
//     },
//     filter: 'Muscles',
//     name: 'serratus anterior',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962ba',
//     },
//     filter: 'Muscles',
//     name: 'levator scapulae',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962bd',
//     },
//     filter: 'Muscles',
//     name: 'serratus anterior',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962ba',
//     },
//     filter: 'Muscles',
//     name: 'levator scapulae',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962bd',
//     },
//     filter: 'Muscles',
//     name: 'serratus anterior',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962ba',
//     },
//     filter: 'Muscles',
//     name: 'levator scapulae',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962bd',
//     },
//     filter: 'Muscles',
//     name: 'serratus anterior',
//     imgURL:
//       'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
//   },
// ];
// // TEMPORARY

// const Muscles = () => {
//   // const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   // const { muscles } = useSelector(state => state.exercises);

//   // useEffect(() => {
//   //   dispatch(getExercisesMuscles());
//   // }, [dispatch]);

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
//   const allExersise = exeFilters.length;

//   // function arrayPerPage() {
//   //   const currentExe = muscles.slice(firstExeIndex, lastExeIndex);
//   //   return currentExe;
//   // }
//   const arrayPerPage = () => exeFilters.slice(firstExeIndex, lastExeIndex);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <>
//       <ExercisesSubcategoriesList arr={arrayPerPage()} />
//       <Pagination
//         exePerPage={perPage()}
//         totalExe={allExersise}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </>
//   );
// };

// export default Muscles;
