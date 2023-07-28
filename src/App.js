import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductPage from './pages/productpage';
import CustomPage from './pages/custompage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/originals" element={<ProductPage />} />
        <Route path="/customise" element={<CustomPage />} />
      </Routes>
    </>
  ); 
}

export default App;
