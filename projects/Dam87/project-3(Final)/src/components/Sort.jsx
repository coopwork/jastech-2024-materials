import React from "react";
import { useTranslation } from "react-i18next";
function Sort({ value, onChangeSort }) {
   const [open, setOpen] = React.useState(false);
   const { t } = useTranslation();
   const list = [
      { name: t("rating") + "▼", sortProperty: "rating" },
      { name: t("rating") + "▲", sortProperty: "-rating" },
      { name: t("price") + "▼", sortProperty: "price" },
      { name: t("price") + "▲", sortProperty: "-price" },
      { name: t("alphabet") + "Я-А", sortProperty: "title" },
      { name: t("alphabet") + "А-Я", sortProperty: "-title" },
   ];
   const onClickListItem = (i) => {
      onChangeSort(i);
      setOpen(false);
   };

   return (
      <div className="sort">
         <div className="sort__label">
            <b>{t("sortBy")}:</b>
            <span onClick={() => setOpen(!open)}>{value.name}</span>
         </div>

         {open && (
            <div className="sort__popup">
               <ul>
                  {list.map((obj, i) => (
                     <li
                        key={i}
                        onClick={() => onClickListItem(obj)}
                        className={
                           value.sortProperty === obj.sortProperty
                              ? "active"
                              : ""
                        }
                     >
                        {obj.name}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}
export default Sort;
