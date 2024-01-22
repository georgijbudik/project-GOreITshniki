// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getExercisesEquipment } from '../../../redux/exercises/exerciseOperations';
// import Pagination from '../Pagination';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';

// const Equipment = () => {
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const { equipment } = useSelector(state => state.exercises);

//   useEffect(() => {
//     dispatch(getExercisesEquipment());
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
//     const currentExe = equipment.slice(firstExeIndex, lastExeIndex);
//     return currentExe;
//   }

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <>
//       <ExercisesSubcategoriesList arr={arrayPerPage()} />
//       <Pagination
//         exePerPage={perPage()}
//         totalExe={equipment.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </>
//   );
// };

// export default Equipment;

//*=================================================================

// import React, { useState } from 'react';
// import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList';
// import Pagination from '../Pagination';

// // TEMPORARY
// const exeFilters = [
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639629c',
//     },
//     filter: 'Equipment',
//     name: 'hammer',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/hammer_rkogqp.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962a3',
//     },
//     filter: 'Equipment',
//     name: 'rope',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/rope_msaxz6.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639629c',
//     },
//     filter: 'Equipment',
//     name: 'hammer',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/hammer_rkogqp.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962a3',
//     },
//     filter: 'Equipment',
//     name: 'rope',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/rope_msaxz6.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639629c',
//     },
//     filter: 'Equipment',
//     name: 'hammer',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/hammer_rkogqp.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962a3',
//     },
//     filter: 'Equipment',
//     name: 'rope',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/rope_msaxz6.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639629c',
//     },
//     filter: 'Equipment',
//     name: 'hammer',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/hammer_rkogqp.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962a3',
//     },
//     filter: 'Equipment',
//     name: 'rope',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/rope_msaxz6.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc639629c',
//     },
//     filter: 'Equipment',
//     name: 'hammer',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/hammer_rkogqp.jpg',
//   },
//   {
//     _id: {
//       $oid: '650f35ece3f5522fc63962a3',
//     },
//     filter: 'Equipment',
//     name: 'rope',
//     imgURL: 'https://ftp.goit.study/img/power-pulse/filters/rope_msaxz6.jpg',
//   },
// ];
// // TEMPORARY

// const Equipment = () => {
//   // const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   // const { equipment } = useSelector(state => state.exercises);

//   // useEffect(() => {
//   //   dispatch(getExercisesEquipment());
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
//   //   const currentExe = equipment.slice(firstExeIndex, lastExeIndex);
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

// export default Equipment;
