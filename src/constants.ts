export const BASE_URL = "https://dummyjson.com";

export const ENDPOINTS = {
  getCategories: '/products/categories',
  getProductsByCategory: '/products/category/{category}'
}

export const CHART_TYPES = {
  PIE: 'pie',
  COLUMN: 'column'
}

export const  BAR_CHART_DATA_LABEL_OPTIONS = {
  enabled: true,
  format: '{point.y}$',
  style: {
      textOutline: 'none'
  }
}

export const  PIE_CHART_DATA_LABEL_OPTIONS =  [
  {
    enabled: true,
    distance: 2
  },
  {
    enabled: true,
    distance: -30,
    format: '{point.y}$',
    style: {
      color: 'black',
      textOutline: 'white',
    }
  }
]
