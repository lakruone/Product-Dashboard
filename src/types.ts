export type UseFetchProps = {
  endpoint: string,
  pathParam?: Record<string, unknown> | undefined,
  dependencies?: string[]
}

export type FilterPanelProps = {
  setGraphData: React.Dispatch<React.SetStateAction<GraphOptionTypes | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
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

export  type GraphDataType = {
  name: string;
  y: number;
}[]

export type GraphComponentProps = {
  graphData: GraphOptionTypes | null
  loading: boolean
}

export type GraphOptionTypes = {
  graphType: string
  graphTitle: string
  yAxisTitle?: string
  data: GraphDataType
}

export type GenerateGraphDataProps = {
  selectedCategory: string
  selectedProducts: ProductType[]
  categories: string[]
  products: ProductType[]
  setGraphData:  (value: React.SetStateAction<GraphOptionTypes | null>) => void
}