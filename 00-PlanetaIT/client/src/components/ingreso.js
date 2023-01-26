import {useEffect} from 'react';
import {useState} from 'react';
import React from 'react'



const Ingreso = () => {

  const [ingresos, setIngresos] = useState([])
  
  useEffect( () => {
    fetch('http://localhost:3002/api/ingresos')
    .then( (res) => res.json())
    .then( (ingresos) => setIngresos(ingresos.ingresos))
    
    
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
        { ingresos.map(ing => {
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

export default Ingreso;
