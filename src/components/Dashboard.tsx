import { useState } from 'react'
import { Box } from '@mui/material';
import FilterPanel from './FilterPanel';
import GraphComponent from './GraphComponent';
import { GraphDataOptionTypes } from '../types';

const Dashboard = () => {
  const [graphData, setGraphData] = useState<GraphDataOptionTypes | null>(null);
 
  return (
    <Box display={'flex'} gap={'15px'}>
        <FilterPanel setGraphData={setGraphData}/>
        <GraphComponent graphData={graphData}/>
    </Box>
  )
}

export default Dashboard