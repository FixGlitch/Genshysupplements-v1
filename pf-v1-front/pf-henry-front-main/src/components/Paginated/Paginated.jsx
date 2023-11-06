import React, { useContext } from "react";
import { FiltersContext } from "../../context/filter";

export function Paginated({ currentPage, totalPages }) {

  const { filters, setFilters } = useContext(FiltersContext);
  let elements = [];
  
  console.log(filters)

  for (let i = 0; i < Number(totalPages); i++) {
    elements.push(
      <button
        key={i}
        onClick={() => {setFilters({ ...filters, page: i + 1 }); console.log('llegue al click');}}
        className={
          i + 1 === currentPage
            ? "bg-redFred-100 py-[8px] px-[24px] text-blackFred-300 font-bebas rounded-none ml-[8px]"
            : "bg-graym text-blackFred-100 py-[8px] px-[24px] font-bayon-bold rounded-none ml-[8px]"
        }
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="mt-[25px] mb-[50px]">
      <input
        type="button"
        value="Prev"
        name="Prev"
        className="bg-redFred-100 py-[10px] px-[24px] text-blackFred-300 hover:text-orangeFred-100 cursor-pointer font-impact rounded-sm ml-[8px]"
        onClick={() => {
          setFilters({ ...filters, page: currentPage - 1 });
        }}
        disabled={currentPage === 1}
      />

      {elements}

      <input
        type="button"
        value="Next"
        name="Next"
        className="bg-redFred-100 py-[10px] px-[24px]  text-blackFred-300 hover:text-orangeFred-100 cursor-pointer  font-impact rounded-sm ml-[8px]"
        onClick={() => {
          setFilters({ ...filters, page: currentPage + 1 });
        }}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}