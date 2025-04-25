// import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../../contexts/categories.context";
// // import ProductCard from "../../product-card/product-card.component";
// import CategoryPreview from "../../category-preview/categorypreview.component";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
// This component maps over the SHOP_DATA array and displays each category with its items.
