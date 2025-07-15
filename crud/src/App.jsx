
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Product from './pages/products/Product';
import Error from './components/Error'
import Header from './components/Header'
import Admin from './pages/admin/Admin';
import AdminLayput from './components/AdminLayput';
import AddProduct from './pages/products/AddProduct'


function App() {
 

  return (
    <>
      
      <Routes >
        <Route element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/prodcut' element={<Product />} />
          <Route path='/*' element={<Error />} />
        </Route>
        <Route element={<AdminLayput />}>
          <Route path='admin' element={<Admin />} />
          <Route path='addProduct' element={<AddProduct />} />
        </Route>
        

        
      </Routes>
    </>
  )
}

export default App
