import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/Shop-context';

function App() {
  return(
    <div className="App">
      
      <ShopContextProvider>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App