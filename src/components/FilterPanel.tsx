import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useContext } from "react"
import { FilterPanelProps } from "../types";
import { CategoryContext } from "../context/CategoryContext";

const FilterPanel = ({categories}: FilterPanelProps) => {

  const categoryContext = useContext(CategoryContext);

  const handleCategory = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    console.log(event.target.value);
    categoryContext.setCategory(event.target.value)
  }


  return (
    <Box minWidth={'250px'} height={'calc(100vh - 70px)'} border={'1px solid grey'} borderRadius={2} p={'20px'} >
      <Box display={'flex'} justifyContent={'space-between'} paddingBottom={'20px'}>
        <Typography variant="h4">Filters</Typography>
        <Button variant="text" sx={{textTransform: 'none'}}>Clear</Button>
      </Box>
      <Box>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={categoryContext.category}
          fullWidth
          onChange={(e) => handleCategory(e)}
          displayEmpty
        >
          <MenuItem value={""} disabled>Select Category</MenuItem>
          {categories?.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
        </Select>
      </Box>
     
      <Button variant="contained" sx={{textTransform: 'none', position:'absolute', bottom: '0', width: '250px', height:'50px' }} >Run Report</Button>
    </Box>
  )
}

export default FilterPanel
