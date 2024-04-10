import { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext';
import { useFetch } from '../hooks/useFetch';
import { ENDPOINTS } from '../constants';
import { Box } from '@mui/material';
import FilterPanel from './FilterPanel';
import GraphComponent from './GraphComponent';
import { ProductContext } from '../context/ProductContext';
import { GraphDataOptionTypes, ProductType } from '../types';

const Dashboard = () => {
  const [graphData, setGraphData] = useState<GraphDataOptionTypes | null>(null);
  const categoryContext = useContext(CategoryContext);
  const productContext = useContext(ProductContext);
  const {data: productsResponse, isLoading, error} = useFetch<{ products: ProductType[]}>({ endpoint: ENDPOINTS.getProductsByCategory, pathParam: { category: categoryContext.category },  dependencies: [categoryContext.category] });
  const {data: categories} = useFetch<string[]>({ endpoint: ENDPOINTS.getCategories });
  const products = productsResponse?.products || [];
  
  useEffect(() => {
    if(products.length) {
      productContext?.setProducts(productsResponse.products);
    }
  },[products])
 
  return (
    <Box display={'flex'} gap={'15px'}>
        <FilterPanel categories={categories} setGraphData={setGraphData}/>
        {isLoading ? 
          <h2>Loading</h2>
          :<GraphComponent graphData={graphData}/>
        }
    </Box>
  )
}

export default Dashboard