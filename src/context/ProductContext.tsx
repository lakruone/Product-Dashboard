import { createContext, useState } from "react";
import { ProductContextProviderProps, ProductContextType, ProductType } from "../types";

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  return <ProductContext.Provider value={{products, setProducts}}>{ children }</ProductContext.Provider>
}