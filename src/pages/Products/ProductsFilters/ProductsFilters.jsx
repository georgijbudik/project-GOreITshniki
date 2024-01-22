import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectCategories } from '../../../redux/products/productSlice';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  StyledTextFilters,
  StyledSearchBtn,
  StyledBtnsContainer,
  StyledSearchContainer,
  StyledSearchInput,
  StyledSelectContainer,
  StyledForm,
  StyledRecommendContainer,
  StyledCategoryContainer,
  StyledEm,
  StyledInput,
} from './ProductsFilters.styled';

const ProductsFilters = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [hasSearchInputFocus, setHasSearchInputFocus] = useState(false);
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
      category: e.target.value,
      recommendation: recommendationFromParams,
    });
    setCategory(e.target.value);
  };

  const handleRecommendationSelect = e => {
    setSearchParams({
      search: searchFromParams,
      category: categoryFromParams,
      recommendation: e.target.value,
    });
    setRecommendation(e.target.value);
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
      <StyledTextFilters>Filters</StyledTextFilters>
      <StyledSearchContainer $hasFocus={hasSearchInputFocus}>
        <label>
          <StyledSearchInput
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSearchOnChange}
            value={search}
            onFocus={() => setHasSearchInputFocus(true)}
            onBlur={() => setHasSearchInputFocus(false)}
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
        <StyledCategoryContainer>
          <FormControl fullWidth variant="standard">
            <Select
              value={category}
              onChange={handleCategorySelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              input={<StyledInput />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    height: '228px',
                    mt: '4px',
                    ml: '4px',
                    borderRadius: '12px',
                    bgcolor: '#1C1C1C',
                  },
                },
              }}
            >
              <MenuItem value="" sx={{ fontSize: '14px', m: 0, px: '10px' }}>
                <StyledEm>All categories</StyledEm>
              </MenuItem>
              {categories.map(item => (
                <MenuItem
                  key={item._id}
                  value={item.category}
                  sx={{ fontSize: '14px', m: 0, px: '10px' }}
                >
                  {item.category[0].toUpperCase() + item.category.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </StyledCategoryContainer>
        <StyledRecommendContainer>
          <FormControl fullWidth variant="standard">
            <Select
              value={recommendation}
              onChange={handleRecommendationSelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              input={<StyledInput />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    height: '160px',
                    mt: '4px',
                    borderRadius: '12px',
                    bgcolor: '#1C1C1C',
                  },
                },
              }}
            >
              <MenuItem value="" sx={{ fontSize: '14px', m: 0, px: '10px' }}>
                <StyledEm>All</StyledEm>
              </MenuItem>
              <MenuItem
                value={'recommended'}
                sx={{ fontSize: '14px', m: 0, px: '10px' }}
              >
                Recommended
              </MenuItem>
              <MenuItem
                value={'not recommended'}
                sx={{ fontSize: '14px', m: 0, px: '10px' }}
              >
                Not recommended
              </MenuItem>
            </Select>
          </FormControl>
        </StyledRecommendContainer>
      </StyledSelectContainer>
    </StyledForm>
  );
};

export default ProductsFilters;
