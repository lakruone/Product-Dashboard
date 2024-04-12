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
    distance: 5,
    formatter: function () {
      // Check if the label text is too long
      if (this.point.name.length > 20) {
        const splitArray = this.point.name.split(" ");
        const firstLine = splitArray.slice(0,2).join(" ")
        const secondLine = splitArray.slice(2).join(" ")

        // Return the formatted label with a line break
        return `<b>${firstLine}<br>${secondLine}</b>`;
      } else {
        // Return the original label if it's not too long
        return `<b>${this.point.name}</b>`;
      }
    }
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
