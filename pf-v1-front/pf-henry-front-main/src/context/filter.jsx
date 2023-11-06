import { createContext, useState } from "react";

export const FiltersContext = createContext()

export default function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        orderBy: "",
        category: "",
        diet: "",
        flavor: "",
        weightType: "",
        weightMin: "",
        weightMax: "",
        page: 1,
        name: "",
        priceMin: "",
        priceMax: "",
        active: ""
      });

      

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
         {children}
        </FiltersContext.Provider>
    )
}