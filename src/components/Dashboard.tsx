import { useState } from 'react'
import { Box } from '@mui/material';
import FilterPanel from './FilterPanel';
import GraphComponent from './GraphComponent';
import { GraphDataOptionTypes } from '../types';

const Dashboard = () => {
  const [graphData, setGraphData] = useState<GraphDataOptionTypes | null>(null);
  const [loading, setLoading] = useState(false);
 
  return (
    <Box display={'flex'} gap={'15px'}>
        <FilterPanel setGraphData={setGraphData} setLoading={setLoading} loading={loading}/>
        <GraphComponent graphData={graphData} loading={loading}/>
    </Box>
  )
}

export default Dashboard