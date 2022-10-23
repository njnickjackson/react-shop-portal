import React from 'react';
import Home from './Home';
import About from './About';
import ViewAll from './ViewAll';
import NewProduct from './NewProduct';
import Search from './Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SampleItems from './SampleItems';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SampleItems />}/>
          <Route path="about" element={<About />} />
          <Route path="products" element={<ViewAll />}>
            <Route index element={<h1>Products</h1>}/>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
          <Route path="searchResults" element={<Search />} />
          <Route path="add" element={<NewProduct />} />
          <Route path="edit/:productId" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
