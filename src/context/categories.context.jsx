import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop.data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
//as the actual value you want to acces
export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCatigoriesMap = async () => {
      const categoriMap = await getCategoriesAndDocuments();
      console.log(categoriMap);
      setCategoriesMap(categoriMap);
    };
    getCatigoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
