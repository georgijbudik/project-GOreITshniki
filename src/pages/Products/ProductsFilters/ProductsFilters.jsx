// import { useSelector } from "react-redux";
// import { selectCategories } from "../../../redux/products/productSlice";

const ProductsFilters = () => {
  
  // const data = useSelector(selectCategories);
  
  const data = ['alcoholic drinks','berries','cereals','dairy','dried fruits','eggs','fish','flour','fruits','meat','mushrooms','nuts',
  'oils and fats', 'poppy', 'sausage', 'seeds', 'sesame', 'soft drinks', 'vegetables and herbs'];
  const categories = ['categories', ...data];

  return (
    <form>
      <div>
        <label>
          <input type="text" placeholder="Search" />
        </label>
        <button type="button">
          <svg width="10" height="10" stroke="black">
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-cross'
              }
            ></use>
          </svg>
        </button>
        <button type="submit">
          <svg width="10" height="10" stroke="black">
            <use
              href={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-search'
              }
            ></use>
          </svg>
        </button>
      </div>
      <label>
        <select>
          {categories.map(category => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select>
          <option value="all">All</option>
          <option value="recommended">Recommended</option>
          <option value="not recommended">Not recommended</option>
        </select>
      </label>
    </form>
  );
};

export default ProductsFilters;
