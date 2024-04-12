import { BAR_CHART_DATA_LABEL_OPTIONS, CHART_TYPES, PIE_CHART_DATA_LABEL_OPTIONS } from "../constants"
import { GenerateGraphDataProps, GraphOptionTypes } from "../types"


export const generateGraphOptions = (graphData: GraphOptionTypes) => {
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

export const generateGraphData = ({selectedCategory, selectedProducts, categories, products, setGraphData }: GenerateGraphDataProps) => {
    let graphData = {} as GraphOptionTypes;  
    
    if (selectedCategory === "" && categories.length) { // checks all dropdown are empty
      graphData = {
        graphType: CHART_TYPES.PIE,
        graphTitle: 'Categories',
        data: categories.map(category => {
          return {
            name: category,
            y: 1
          }
        })
      }
      setGraphData(graphData);
    } else if (selectedProducts.length) { // checks products are selected
      graphData = {
        graphType: CHART_TYPES.COLUMN,
        graphTitle: 'Products in selected Category',
        yAxisTitle: selectedCategory,
        data: selectedProducts.map(product => {
          return {
            name: product.title,
            y: product.price,
            dataLabels: BAR_CHART_DATA_LABEL_OPTIONS
          }
        })
      }
      setGraphData(graphData);

    } else if (selectedCategory && products) {  // checks only category is selected
      graphData = {
        graphType: CHART_TYPES.PIE,
        graphTitle: 'Products in selected Category',
        data: products.map(product => {
          return {
            name: product.title,
            y: product.price,
            dataLabels: PIE_CHART_DATA_LABEL_OPTIONS
          }
        })
      }
      setGraphData(graphData);
    } else {
      setGraphData(null)
    }
  }