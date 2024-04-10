export type UseFetchProps = {
    endpoint: string,
    pathParam?: Record<string, unknown> | undefined,
    dependencies?: string[]
}

export type FilterPanelProps = {
    categories: string[]
}

export type CategoryContextProviderProps = {
    children: React.ReactNode
}

export type CategoryContextType = {
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export type ProductType = {
    id: number,
    title: string,
    price: number
}

export type ProductContextProviderProps = {
    children: React.ReactNode
}

export type ProductContextType = {
    products: ProductType[] | null
    setProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>
}