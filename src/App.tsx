import './App.css'
import { CategoryContextProvider } from './context/CategoryContext'
import Dashboard from './components/Dashboard'
import { ProductContextProvider } from './context/ProductContext'

function App() {

  return (
      <CategoryContextProvider>
        <ProductContextProvider>
          <Dashboard/>
        </ProductContextProvider>
      </CategoryContextProvider>
  )
}

export default App
