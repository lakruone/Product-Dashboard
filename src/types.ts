export type UseFetchProps = {
    endpoint: string,
    pathParam?: Record<string, unknown> | undefined
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