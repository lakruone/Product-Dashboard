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
            text: ''
        }
    },
    xAxis: {
        title: {
            text: 'Smartphones'
        },
        categories: productLabels
    },
    series: [{
        data: graphData
    }],
    
  }

const GraphComponent = () => {
  return (
    <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" >
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </Box>
  )
}

export default GraphComponent