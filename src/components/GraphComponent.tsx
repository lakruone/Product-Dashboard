import { Box } from '@mui/material'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

const productLabels = ['Arsenal', 'Chelsea']
const graphData = [{
    name: 'Point 1',
    y: 2,
}, {
    name: 'Point 2',
    y: 5,
}]

function generateGraphOptions() {
    const options = {
        title: {
        text: 'Products in selected Category',
        align: 'left'
        },
        chart: {
            type: 'column',
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
            data: graphData
        }],
    }

    return options
}


const GraphComponent = () => {
  return (
    <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" >
        <HighchartsReact
            highcharts={Highcharts}
            options={generateGraphOptions()}
        />
    </Box>
  )
}

export default GraphComponent