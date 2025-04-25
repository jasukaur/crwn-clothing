import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
// import ProductCard from "../../product-card/product-card.component";
import CategoryPreview from "../../category-preview/categorypreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Fragment key={title}>
            <CategoryPreview title={title} products={products} />
          </Fragment>
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
// This component maps over the SHOP_DATA array and displays each category with its items.
