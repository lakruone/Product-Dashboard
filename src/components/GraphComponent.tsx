import { Box } from '@mui/material'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { CHART_TYPES } from '../constants';
import { GraphComponentProps, GraphDataOptionTypes } from '../types';

const productLabels = ['Arsenal', 'Chelsea']


function generateGraphOptions(graphData: GraphDataOptionTypes) {
    // TODO: change title of the graph accordingly
    const options = {
        title: {
        text: 'Products in selected Category',
        align: 'left'
        },
        chart: {
            type: graphData.graphType,
        },
        yAxis: {
            title: {
                text: 'Smartphones'
            }
        },
        xAxis: {
            categories: productLabels
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