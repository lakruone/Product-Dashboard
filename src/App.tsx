import { Box } from '@mui/material'
import './App.css'
import FilterPanel from './components/FilterPanel'
import GraphComponent from './components/GraphComponent'
import { useFetch } from './hooks/useFetch'
import { ENDPOINTS } from './constants'
import { CategoryContextProvider } from './context/CategoryContext'

function App() {
  const {data: products, isLoading, error} = useFetch({endpoint: ENDPOINTS.getProducts});
  const {data: categories} = useFetch({endpoint: ENDPOINTS.getCategories});

  return (
    <Box display={'flex'} gap={'15px'}>
      <CategoryContextProvider>
        <FilterPanel categories={categories}/>
        {isLoading ? 
          <h2>Loading</h2>
          :<GraphComponent/>
        }
      </CategoryContextProvider>

    </Box>
  )
}

export default App
