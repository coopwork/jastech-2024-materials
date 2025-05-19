import React from "react";
import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, onChangePage, totalPages }) => {
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel="..."
         nextLabel=" >"
         onPageChange={(event) => onChangePage(event.selected + 1)}  
         pageRangeDisplayed={5}  
         pageCount={totalPages}  
         forcePage={currentPage - 1}  
         previousLabel="< "
         renderOnZeroPageCount={null}
      />
   );
};

export default Pagination;
