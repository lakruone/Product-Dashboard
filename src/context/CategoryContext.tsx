import { createContext, useState } from "react";
import { CategoryContextProviderProps, CategoryContextType } from "../types";

export const CategoryContext = createContext({} as CategoryContextType)

export const CategoryContextProvider = ({ children }: CategoryContextProviderProps) => {
    const [category, setCategory] = useState<string>("");
    return <CategoryContext.Provider value={{category, setCategory}}>{ children }</CategoryContext.Provider>
}