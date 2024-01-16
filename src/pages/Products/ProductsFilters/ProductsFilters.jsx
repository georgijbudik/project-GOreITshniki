// import { useSelector } from "react-redux";
// import { selectCategories } from "../../../redux/products/productSlice";
import { useEffect, useState } from 'react';
import {
  CategorySelect,
  RecommendSelect,
  SearchBtn,
  SearchBtns,
  SearchContainer,
  SearchInput,
  SelectContainer,
} from './ProductsFilters.styled';
import { useSearchParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const ProductsFilters = () => {
  const data = [
    'alcoholic drinks',
    'berries',
    'cereals',
    'dairy',
    'dried fruits',
    'eggs',
    'fish',
    'flour',
    'fruits',
    'meat',
    'mushrooms',
    'nuts',
    'oils and fats',
    'poppy',
    'sausage',
    'seeds',
    'sesame',
    'soft drinks',
    'vegetables and herbs',
  ];

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('categories');
  const [recommendation, setRecommendetion] = useState('all');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts({search, category, recommendation}))
  // }, [dispatch, search, category, recommendation]);

  const [searchParams, setSearchParams] = useSearchParams();

  // const data = useSelector(selectCategories);
  const categories = ['categories', ...data];

  const searchFromParams = searchParams.get('search') ?? '';
  const categoryFromParams = searchParams.get('category') ?? 'categories';
  const recommendationFromParams = searchParams.get('recommendation') ?? 'all';

  useEffect(() => {
    setSearch(searchFromParams);
  }, [searchFromParams]);

  useEffect(() => {
    setCategory(categoryFromParams);
  }, [categoryFromParams]);

  useEffect(() => {
    setRecommendetion(recommendationFromParams);
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
    <form onSubmit={handleSearchSubmit}>
      <SearchContainer>
        <label>
          <SearchInput
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSearchOnChange}
            value={search}
          />
        </label>
        <SearchBtns>
          {search && (
            <SearchBtn type="button" onClick={handleSearchDeleteClick}>
              <svg width="18" height="18" stroke="var(--accent-color)">
                <use
                  href={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-cross'
                  }
                ></use>
              </svg>
            </SearchBtn>
          )}
          <SearchBtn type="submit">
            <svg width="18" height="18" fill="var(--main-text-color)">
              <use
                href={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-search'
                }
              ></use>
            </svg>
          </SearchBtn>
        </SearchBtns>
      </SearchContainer>
      <SelectContainer>
        <label>
          <CategorySelect onChange={handleCategorySelect} value={category}>
            {categories.map(category => (
              <option key={category} value={category}>
                {category[0].toUpperCase() + category.slice(1)}
              </option>
            ))}
          </CategorySelect>
        </label>
        <label>
          <RecommendSelect
            onChange={handleRecommendationSelect}
            value={recommendation}
          >
            <option value="all">All</option>
            <option value="recommended">Recommended</option>
            <option value="not recommended">Not recommended</option>
          </RecommendSelect>
        </label>
      </SelectContainer>
    </form>
  );
};

export default ProductsFilters;
