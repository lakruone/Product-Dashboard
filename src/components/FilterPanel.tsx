import { Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { FilterPanelProps, ProductType } from "../types";
import { CategoryContext } from "../context/CategoryContext";
import { ProductContext } from "../context/ProductContext";

const FilterPanel = ({categories}: FilterPanelProps) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);

  const categoryContext = useContext(CategoryContext);
  const productContext = useContext(ProductContext);

  const handleChange = (event: SelectChangeEvent<typeof selectedProducts>) => {
    const { value } = event.target;
    setSelectedProducts(typeof value === 'string' ? [] : value,);
  };

  const handleCategory = async(event: SelectChangeEvent<string>) => {
    event.preventDefault();
    categoryContext.setCategory(event.target.value)    
    setSelectedProducts([]);
  }

  // check if selected products empty and category is selected => then show pie chart for all products related to that category


  return (
    <Box minWidth={'250px'} height={'calc(100vh - 70px)'} border={'1px solid grey'} borderRadius={2} p={'20px'} >
      <Box display={'flex'} justifyContent={'space-between'} paddingBottom={'35px'}>
        <Typography variant="h4">Filters</Typography>
        <Button variant="text" sx={{textTransform: 'none'}}>Clear</Button>
      </Box>
      <Box display={"flex"} flexDirection={'column'} gap={'20px'}> 
        <FormControl>
          <InputLabel id="category-select-label">Select Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={categoryContext.category}
            onChange={handleCategory}
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
            onChange={handleChange}
            input={<OutlinedInput label="Select Product" />}
            // renderValue={(selected) => selected.join(', ')}
            renderValue={(selected) => selected.map(product => product.title).join(', ')}
            fullWidth
            disabled={categoryContext.category === ""}
          >
          {productContext?.products?.map((product) => (
            <MenuItem key={product.id} value={product}>
              <Checkbox checked={selectedProducts.indexOf(product) > -1} />
              <ListItemText primary={product.title} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      </Box> 
     
      <Button variant="contained" sx={{textTransform: 'none', position:'absolute', bottom: '0', width: '250px', height:'50px' }} >Run Report</Button>
    </Box>
  )
}

export default FilterPanel
