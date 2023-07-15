
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import ProductDisplay from './components/ProductDisplay'
import Contact from './components/contectPage/Contact';
import Services from './components/Services/Services';
import CartItems from './components/CartItems';
import AboutPage from './components/aboutpage/AboutPage';

function App() {
  return (
    <div className="App">

     <Routes>
        <Route path="/" element={ <Registration/>}></Route>
        <Route path="/Login" element={ <Login/>}></Route>
       <Route path='/product' element = {<ProductDisplay/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/services' element = {<Services/>}></Route>
       <Route path='/signup' element = {<Registration/>}> </Route>
       <Route path='/Cartitems' element = {<CartItems/>}></Route>
       <Route path='/about' element = {<AboutPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
