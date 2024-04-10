import { Box } from '@mui/material'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { GraphComponentProps, GraphDataOptionTypes } from '../types';

function generateGraphOptions(graphData: GraphDataOptionTypes) {
    const options = {
        title: {
        text: graphData.graphTitle,
        align: 'left'
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


const GraphComponent = ({graphData}: GraphComponentProps) => {
  return (
    <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" >
        {graphData?.data && <HighchartsReact
            highcharts={Highcharts}
            options={generateGraphOptions(graphData)}
        />}
    </Box>
  )
}

export default GraphComponent