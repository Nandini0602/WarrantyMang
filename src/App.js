
import './App.css';
import Clogin from './Customer/clogin';
import Login from './login';
import Cdashboard from './Customer/cdashboard';
import Cbuy from './Customer/cbuy';
import Cdrawer from './Customer/cdrawer';
import Cproblemp from './Customer/cproblemp';
import Cproduct from './Customer/cproduct';
import Cprofile from './Customer/cprofile';
import Cpurchasehis from './Customer/cpurchasehis';
import Cregister from './Customer/cregister';
import Vlogin from './Vendorfnd/vlogin';
import Vdashboard from './Vendorfnd/vdashboard';
import Vaddp from './Vendorfnd/vaddp';
import Vwarrantyp from './Vendorfnd/vwarrantyp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='clogin' element={<Clogin/>}/>
    <Route path='cdashboard' element={<Cdashboard/>}/>
    <Route path='cbuy' element={<Cbuy/>}/>
    <Route path='cdrawer' element={<Cdrawer/>}/>
    <Route path='cproblemp' element={<Cproblemp/>}/>
    <Route path='cproduct' element={<Cproduct/>}/>
    <Route path='cprofile' element={<Cprofile/>}/>
    <Route path='cpurchasehis' element={<Cpurchasehis/>}/>
    <Route path='cregister' element={<Cregister/>}/>
    <Route path='vlogin' element={<Vlogin/>}/>
    <Route path='vdashboard' element={<Vdashboard/>}/>
    <Route path='vaddp' element={<Vaddp/>}/>
    <Route path='vwarrantyp' element={<Vwarrantyp/>}/>
  </Routes>
  </Router>
  
   
  );
}

export default App;
