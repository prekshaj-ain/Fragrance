import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Products from './Components/Products';

function App() {
  return (
    <BrowserRouter>
    <div className="bg-[#fcf8f6]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Body />} exact/>
        <Route path="/:Product" element={<Products />} >
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
