import { Box, Button, CircularProgress, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { FilterPanelProps, ProductType } from "../types";
import { ENDPOINTS } from "../constants";
import { useFetch } from "../hooks/useFetch";
import { generateGraphData } from "../utils/GraphOptions";
import Dropdown from "../shared/Dropdown";
import MultiSelectDropdown from "../shared/MultiSelectDropdown";

const FilterPanel = ({ setGraphData, setLoading, loading }: FilterPanelProps) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {data: categories} = useFetch<string[]>({ endpoint: ENDPOINTS.getCategories });
  const {data: productsResponse} = useFetch<{ products: ProductType[]}>({ endpoint: ENDPOINTS.getProductsByCategory, pathParam: { category: selectedCategory },  dependencies: [selectedCategory] });
  const products = productsResponse?.products || [];

  useEffect(()=> {
    if (categories?.length && selectedCategory === "") generateGraphData({selectedCategory, selectedProducts, categories, products, setGraphData});
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
    generateGraphData({selectedCategory, selectedProducts, categories, products, setGraphData});

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <Box minWidth={'250px'} height={'calc(100vh - 70px)'} border={'1px solid grey'} borderRadius={2} p={'20px'} maxWidth={'250px'}>
      <Box display={'flex'} justifyContent={'space-between'} paddingBottom={'35px'}>
        <Typography variant="h4">Filters</Typography>
        <Button variant="text" sx={{textTransform: 'none', color: 'black'}} onClick={handleClear}>Clear</Button>
      </Box>

      <Box display={"flex"} flexDirection={'column'} gap={'20px'}> 
        <Dropdown
          id="category"
          label="Select Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          list={categories}
        />
        <MultiSelectDropdown
          id="product"
          label="Select Product"
          value={selectedProducts}
          onChange={handleProductChange}
          list={products}
          disabled={selectedCategory === ""}
        />
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
