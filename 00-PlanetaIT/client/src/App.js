import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';



const App = () => {

    const [ingresos, setIngresos] = useState([])

    useEffect( () => {
      fetch('http://localhost:3002/api/ingresos')
      .then( (res) => res.json())
      .then( (ingresos) => setIngresos(ingresos))
      
      
    }, [] )

    console.log(ingresos)

    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
          { Object.entries(ingresos).map(ing => {
            return (
                <tr key= {ing._id}>
                  <td>{ing.nombre}</td>
                  <td>{ing.descripcion}</td>
                  <td>{ing.telefono}</td>
                </tr>
                );
              })}
          
          </tbody>
        </table>
      </div>
    );
  }

export default App;
