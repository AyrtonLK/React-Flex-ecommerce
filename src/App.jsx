
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/context';
import { ToastContainer } from 'react-toastify';

function App() {

  return (   
    <>
     <ContextProvider>
     <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>    
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetail />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
        /*coming soon footer*/
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}; 

export default App;
