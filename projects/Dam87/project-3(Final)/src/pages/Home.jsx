import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
   const { t, i18n } = useTranslation();
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [categoryId, setCategoryId] = useState(0);
   const [sortType, setSortType] = useState({
      name: "",
      sortProperty: "rating",
   });
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 8;

   useEffect(() => {
      setSortType((prev) => ({ ...prev, name: t("rating") }));
   }, [i18n.language]);

   useEffect(() => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = sortType.sortProperty.replace("-", "");
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue ? `&search=${searchValue}` : "";

      fetch(
         `https://67dd23ace00db03c406a5519.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
      )
         .then((res) => res.json())
         .then((arr) => {
            setItems(Array.isArray(arr) ? arr : []);
            setIsLoading(false);
         })
         .catch(() => {
            setItems([]);
            setIsLoading(false);
         });

      window.scrollTo(0, 0);
   }, [categoryId, sortType.sortProperty, searchValue]);

   const startIndex = (currentPage - 1) * itemsPerPage;
   const displayedItems = Array.isArray(items)
      ? items.slice(startIndex, startIndex + itemsPerPage)
      : [];

   const categoryNames = [
      t("all_pizzas"),
      t("meat_pizzas"),
      t("vegetarian_pizzas"),
      t("grilled_pizzas"),
      t("spicy_pizzas"),
      t("closed_pizzas"),
   ];

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryId} onChangeCategory={setCategoryId} />
            <Sort value={sortType} onChangeSort={setSortType} />
         </div>
         <h2 className="content__title">{categoryNames[categoryId]}</h2>
         <div className="content__items">
            {isLoading
               ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
               : displayedItems.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj} />
                 ))}
         </div>

         <Pagination
            currentPage={currentPage}
            onChangePage={setCurrentPage}
            totalPages={Math.ceil(items.length / itemsPerPage)}
         />
      </div>
   );
};

export default Home;
