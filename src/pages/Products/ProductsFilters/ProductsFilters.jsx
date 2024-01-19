import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectCategories } from '../../../redux/products/productSlice';
import {
  StyledCategorySelect,
  StyledRecommendSelect,
  StyledSearchBtn,
  StyledBtnsContainer,
  StyledSearchContainer,
  StyledSearchInput,
  StyledSelectContainer,
  StyledForm,
} from './ProductsFilters.styled';

const ProductsFilters = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = useSelector(selectCategories);

  const searchFromParams = searchParams.get('search') ?? '';
  const categoryFromParams = searchParams.get('category') ?? '';
  const recommendationFromParams = searchParams.get('recommendation') ?? '';

  useEffect(() => {
    setSearch(searchFromParams);
  }, [searchFromParams]);

  useEffect(() => {
    setCategory(categoryFromParams);
  }, [categoryFromParams]);

  useEffect(() => {
    setRecommendation(recommendationFromParams);
  }, [recommendationFromParams]);

  const handleSearchOnChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({
      search: e.target.elements.search.value,
      category: categoryFromParams,
      recommendation: recommendationFromParams,
    });
  };

  const handleCategorySelect = e => {
    setSearchParams({
      search: searchFromParams,
      category: e.currentTarget.value,
      recommendation: recommendationFromParams,
    });
  };

  const handleRecommendationSelect = e => {
    setSearchParams({
      search: searchFromParams,
      category: categoryFromParams,
      recommendation: e.currentTarget.value,
    });
  };

  const handleSearchDeleteClick = () => {
    setSearchParams({
      search: '',
      category: categoryFromParams,
      recommendation: recommendationFromParams,
    });
    setSearch('');
  };

  return (
    <StyledForm onSubmit={handleSearchSubmit}>
      <StyledSearchContainer>
        <label>
          <StyledSearchInput
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSearchOnChange}
            value={search}
          />
        </label>
        <StyledBtnsContainer>
          {search && (
            <StyledSearchBtn type="button" onClick={handleSearchDeleteClick}>
              <svg width="18" height="18" stroke="var(--accent-color)">
                <use
                  href={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-cross'
                  }
                ></use>
              </svg>
            </StyledSearchBtn>
          )}
          <StyledSearchBtn type="submit">
            <svg width="18" height="18" fill="var(--main-text-color)">
              <use
                href={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-search'
                }
              ></use>
            </svg>
          </StyledSearchBtn>
        </StyledBtnsContainer>
      </StyledSearchContainer>
      <StyledSelectContainer>
        <label>
          <StyledCategorySelect
            onChange={handleCategorySelect}
            value={category}
          >
            {categories.map(item => (
              <option key={item._id} value={item.category}>
                {item.category[0].toUpperCase() + item.category.slice(1)}
              </option>
            ))}
          </StyledCategorySelect>
        </label>
        <label>
          <StyledRecommendSelect
            onChange={handleRecommendationSelect}
            value={recommendation}
          >
            <option value="all">All</option>
            <option value="recommended">Recommended</option>
            <option value="not recommended">Not recommended</option>
          </StyledRecommendSelect>
        </label>
      </StyledSelectContainer>
    </StyledForm>
  );
};

export default ProductsFilters;
