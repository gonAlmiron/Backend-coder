import './App.css';
import IngresoBoot from './components/ingresoBoot';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';



const App = () => {


    return (

      <div className="App-header">


      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route path='/ingresos' element={ <IngresoBoot/> } />


        </Routes>
          
      

      </BrowserRouter>
      </div>

    );
  }

export default App;
