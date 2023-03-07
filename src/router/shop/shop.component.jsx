import { Routes, Route } from "react-router-dom";
import "./shop.sstyle.scss";
import CategoryPreviews from "../categories-preview/categories-preview.comoponent";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreviews />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
