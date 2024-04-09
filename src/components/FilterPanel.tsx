import { Box, Button, Typography } from "@mui/material"


const FilterPanel = () => {
  return (
    <Box minWidth={'250px'} height={'calc(100vh - 70px)'} border={'1px solid grey'} borderRadius={2} p={'20px'} >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h4">Filters</Typography>
        <Button variant="text" sx={{textTransform: 'none'}}>Clear</Button>
      </Box>
      <p>select category</p>
      <p>select product</p>
      <Button variant="contained" sx={{textTransform: 'none', position:'absolute', bottom: '0', width: '250px', height:'50px' }} >Run Report</Button>
    </Box>
  )
}

export default FilterPanel
