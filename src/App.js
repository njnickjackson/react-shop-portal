import React from 'react';
import Home from './Home';
import About from './About';
import ViewAll from './ViewAll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SampleItems from './SampleItems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SampleItems />}/>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ViewAll />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
