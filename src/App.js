// import logo from './logo.svg';
import Facebook from './pages/login/Facebook';
import Facebookreg from './pages/login/Facebookreg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Facebook/>}></Route>
       <Route path="register" element={<Facebookreg/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
