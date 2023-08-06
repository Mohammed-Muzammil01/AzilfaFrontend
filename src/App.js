import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import CustomPage from './pages/custompage';
import SpecificJersey from './pages/specificJersey';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutFailure from './pages/CheckoutFailure';
import Privacy from './pages/Legal/Privacy';
import Specials from './pages/Specials';
import OriginalCategories from './pages/originalCategories';
import International from './pages/productPages/International';
import EPL from './pages/productPages/EPL';
import SpecialJerseys from './pages/productPages/SpecialJerseys';
import LaligaJerseys from './pages/productPages/LaligaJerseys';
import TermsNConditions from './pages/TermsNConditions';
import SizeChart from './pages/sizeChart';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/originals" element={<ProductPage />} /> */}
        <Route path="/customise" element={<CustomPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout-failure" element={<CheckoutFailure />} />
        <Route path="/jersey/:id" element={<SpecificJersey />} />
        <Route path="/privacy" element={<Privacy />} />    
        <Route path="/T&C" element={<TermsNConditions />} /> 
        <Route path="sizechart" element={<SizeChart />} />     
        <Route path="/specials" element={<Specials />} />     
        <Route path="/categories" element={<OriginalCategories />} />    
        <Route path="/categories/international" element={<International />} />     
        <Route path="/categories/EPL" element={<EPL />} />     
        <Route path="/categories/laliga" element={<LaligaJerseys />} />     
        <Route path="/categories/special" element={<SpecialJerseys />} />     


      </Routes>
    </>
  ); 
}

export default App;
