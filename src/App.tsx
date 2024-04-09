import { Box } from '@mui/material'
import './App.css'
import FilterPanel from './components/FilterPanel'
import GraphComponent from './components/GraphComponent'

function App() {
  return (
    <Box display={'flex'} gap={'15px'}>
      <FilterPanel/>
      <GraphComponent/>
    </Box>
  )
}

export default App
