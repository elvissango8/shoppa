import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Pages/RootLayout'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import ProductInfoPage from './Pages/ProductInfoPage';
import ProductsLayout from './Pages/ProductsLayout';
import { MyCartContext } from './Contexts/MyCartContex';
import {useState } from 'react';

function App(){

  const [mycartlist,setCart] = useState([])
  

const router  = createBrowserRouter(
          createRoutesFromElements(

<Route path = '/'   element = {<RootLayout/>} end>
  
<Route index element = {<HomePage/>}></Route>
  <Route path = '/home' element = {<HomePage/>}></Route>


  <Route path = '/products' element = {<ProductsLayout></ProductsLayout>}>
  <Route index element = {<ProductsPage/>}></Route>
  <Route path = ':id' element = {<ProductInfoPage></ProductInfoPage>}></Route>

  </Route>
  
  <Route path = 'mycart' element = {<CartPage/>}></Route>
  
  
</Route>

  )
)

return(
<MyCartContext.Provider value= {{mycartlist,setCart}}>
<RouterProvider router = {router}>

<div>
</div>

</RouterProvider>
</MyCartContext.Provider>

)
}

export default App;