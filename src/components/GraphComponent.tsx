import { Box, CircularProgress } from '@mui/material'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { GraphComponentProps } from '../types';
import { generateGraphOptions } from '../utils/GraphOptions';

const GraphComponent = ({graphData, loading}: GraphComponentProps) => {    
  return (
    <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" >
        {(graphData?.data && !loading) ? <HighchartsReact
            highcharts={Highcharts}
            options={generateGraphOptions(graphData)}
        />: <CircularProgress size={80} />}
    </Box>
  )
}

export default GraphComponent