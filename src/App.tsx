import './App.css'
import Dashboard from './components/Dashboard'
import { ToastContainer } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <>
      <Dashboard/>
      <ToastContainer
        className="toast-custom"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        newestOnTop={false}
        rtl={false}
        pauseOnHover
        icon={({ type }) => {
          if (type === "error") return <CloseIcon fontSize='small'/>;
        }}
      />
      <ToastContainer />
    </>
       
  )
}

export default App
