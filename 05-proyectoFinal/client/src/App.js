import './App.css';
import IngresoBoot from './components/ingresoBoot';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


const App = () => {


    return (


      <BrowserRouter>

        <NavBar/>


        <Routes>

          <Route path='/ingresos' element={ <IngresoBoot/> } />
          <Route path='/' element={ <Home/>} />
          <Route path='/login' element={ <Login/>} />

        </Routes>

      </BrowserRouter>

    );
  }

export default App;
