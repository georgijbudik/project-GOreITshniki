import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectExercisesByType } from '../../../redux/exercises/exerciseSelectors';

import { WrapperStyled } from './ExercisesSubcategoriesList.styled';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';
import Pagination from '../Pagination';

import { NavLink } from 'react-router-dom';

const ExercisesSubcategoriesList = () => {
  const arr = useSelector(selectExercisesByType);

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
  const allExersise = arr.length;

  const arrayPerPage = () => arr.slice(firstExeIndex, lastExeIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const ucFirst = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <>
      <WrapperStyled>
        {arrayPerPage().map(({ name, imgURL, _id, filter }) => {
          return (
            <NavLink
              to={`/exercises/${filter
                .toLowerCase()
                .replace(/\s/g, '')}/${name}`}
              key={_id}
            >
              <ExercisesSubcategoriesItem
                fig={imgURL}
                nameImg={ucFirst(name)}
                category={filter}
              />
            </NavLink>
          );
        })}
      </WrapperStyled>

      <Pagination
        exePerPage={perPage()}
        paginate={paginate}
        totalExe={allExersise}
        currentPage={currentPage}
      />
    </>
  );
};

export default ExercisesSubcategoriesList;
