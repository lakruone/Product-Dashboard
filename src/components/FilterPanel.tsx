import { Box, Button, Checkbox, CircularProgress, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { FilterPanelProps, GraphDataOptionTypes, ProductType } from "../types";
import { CHART_TYPES, ENDPOINTS } from "../constants";
import { useFetch } from "../hooks/useFetch";

const barChartDataLabelOptions = {
  enabled: true,
  format: '{point.y}$',
  style: {
      textOutline: 'none'
  }
}

const FilterPanel = ({ setGraphData, setLoading, loading }: FilterPanelProps) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {data: categories} = useFetch<string[]>({ endpoint: ENDPOINTS.getCategories });
  const {data: productsResponse} = useFetch<{ products: ProductType[]}>({ endpoint: ENDPOINTS.getProductsByCategory, pathParam: { category: selectedCategory },  dependencies: [selectedCategory] });
  const products = productsResponse?.products || [];

  useEffect(()=> {
    if (categories?.length && selectedCategory === "") generateGraphData()
  },[categories, selectedCategory]);

  const handleProductChange = (event: SelectChangeEvent<typeof selectedProducts>) => {
    const { value } = event.target;
    setSelectedProducts(typeof value === 'string' ? [] : value,);
    setIsButtonDisabled(false);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value)    
    setSelectedProducts([]);
    setIsButtonDisabled(false);
  }

  const handleClear = () => {
    setSelectedProducts([]);
    setSelectedCategory("");
    setIsButtonDisabled(true);
  }

  const handleRunReport = () => {
    setLoading(true);
    setIsButtonDisabled(true);
    generateGraphData();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const generateGraphData = () => {
    let graphData = {} as GraphDataOptionTypes;  
    
    if (selectedCategory === "" && categories.length) {
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
    } else if(selectedProducts.length) {
      graphData = {
        graphType: CHART_TYPES.COLUMN,
        graphTitle: 'Products in selected Category',
        yAxisTitle: selectedCategory,
        data: selectedProducts.map(product => {
          return {
            name: product.title,
            y: product.price,
            dataLabels: barChartDataLabelOptions
          }
        })
      }
      setGraphData(graphData);

    } else if (selectedCategory && products) {
      graphData = {
        graphType: CHART_TYPES.COLUMN,
        graphTitle: 'Products in selected Category',
        yAxisTitle: selectedCategory,
        data: products.map(product => {
          return {
            name: product.title,
            y: product.price,
            dataLabels: barChartDataLabelOptions
          }
        })
      }
      setGraphData(graphData);
    } else {
      setGraphData(null)
    }
  }

  return (
    <Box minWidth={'250px'} height={'calc(100vh - 70px)'} border={'1px solid grey'} borderRadius={2} p={'20px'} maxWidth={'250px'}>
      <Box display={'flex'} justifyContent={'space-between'} paddingBottom={'35px'}>
        <Typography variant="h4">Filters</Typography>
        <Button variant="text" sx={{textTransform: 'none'}} onClick={handleClear}>Clear</Button>
      </Box>
      <Box display={"flex"} flexDirection={'column'} gap={'20px'}> 
        <FormControl>
          <InputLabel id="category-select-label">Select Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            input={<OutlinedInput label="Select Category" />}
            fullWidth
          >
            {categories?.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
          </Select>
        </FormControl>

         <FormControl>
          <InputLabel id="product-multiple-select-label">Select Product</InputLabel>
          <Select
            labelId="product-multiple-select-label"
            id="product-multiple-select"
            multiple
            value={selectedProducts}
            onChange={handleProductChange}
            input={<OutlinedInput label="Select Product" />}
            renderValue={(selected) => selected.map(product => product.title).join(', ')}
            fullWidth
            disabled={selectedCategory === ""}
          >
          {products.map((product) => (
            <MenuItem key={product.id} value={product}>
              <Checkbox checked={selectedProducts.indexOf(product) > -1} />
              <ListItemText primary={product.title} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      </Box> 
     
      <Button
        onClick={handleRunReport} 
        disabled={isButtonDisabled}
        variant="contained" 
        sx={{textTransform: 'none', position:'absolute', bottom: '0', width: '250px', height:'50px' }}
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
      >
        Run Report
      </Button>
    </Box>
  )
}

export default FilterPanel
