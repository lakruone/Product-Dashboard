import { Box, CircularProgress } from '@mui/material'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { GraphComponentProps, GraphDataOptionTypes } from '../types';

function generateGraphOptions(graphData: GraphDataOptionTypes) {
    const options = {
        title: {
        text: graphData.graphTitle,
        align: 'left',
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        chart: {
            type: graphData.graphType,
        },
        yAxis: {
            title: {
                text: graphData.yAxisTitle
            }
        },
        xAxis: {
            categories: graphData.data.map(obj => obj.name)
        },
        series: [{
            data: graphData.data
        }],
    }

    return options
}


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