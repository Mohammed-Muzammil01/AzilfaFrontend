import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductPage from './pages/productpage';
import CustomPage from './pages/custompage';
import SpecificJersey from './pages/specificJersey';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutFailure from './pages/CheckoutFailure';
import Privacy from './pages/Legal/Privacy';
import Specials from './pages/Specials';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/originals" element={<ProductPage />} />
        <Route path="/customise" element={<CustomPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout-failure" element={<CheckoutFailure />} />
        <Route path="/jersey/:id" element={<SpecificJersey />} />
        <Route path="/privacy" element={<Privacy />} />     
        <Route path="/specials" element={<Specials />} />     


      </Routes>
    </>
  ); 
}

export default App;
