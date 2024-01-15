// import { useSelector } from "react-redux";
// import { selectCategories } from "../../../redux/products/productSlice";

import {CategorySelect, RecommendSelect, SearchBtn, SearchBtns, SearchContainer, SearchInput, SelectContainer } from "./ProductsFilters.styled";

const ProductsFilters = () => {
  
  // const data = useSelector(selectCategories);
  
  const data = ['alcoholic drinks','berries','cereals','dairy','dried fruits','eggs','fish','flour','fruits','meat','mushrooms','nuts',
  'oils and fats', 'poppy', 'sausage', 'seeds', 'sesame', 'soft drinks', 'vegetables and herbs'];
  const categories = ['categories', ...data];

  return (
    <form>
      <SearchContainer>
        <label>
          <SearchInput type="text" placeholder="Search"/>
        </label>
        <SearchBtns>
          <SearchBtn type="button">
          <svg width="18" height="18" stroke="var(--accent-color)">
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-cross'
              }
            ></use>
          </svg>
        </SearchBtn>
        <SearchBtn type="submit">
          <svg width="18" height="18" fill="var(--main-text-color)">
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-search'
              }
            ></use>
          </svg>
        </SearchBtn>
        </SearchBtns>
      </SearchContainer>
      <SelectContainer>
        <label>
        <CategorySelect>
          {categories.map(category => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </CategorySelect>
      </label>
      <label>
        <RecommendSelect>
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
