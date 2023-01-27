import './App.css';
import IngresoBoot from './components/ingresoBoot';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';


const App = () => {


    return (


      <BrowserRouter>

        <NavBar/>


        <Routes>

          <Route path='/ingresos' element={ <IngresoBoot/> } />
          <Route path='/' element={ <Home/>} />

        </Routes>

      </BrowserRouter>

    );
  }

export default App;
