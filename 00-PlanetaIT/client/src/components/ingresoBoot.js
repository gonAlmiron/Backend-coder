import {useEffect} from 'react';
import {useState} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react'

const IngresoBoot = () => {

  const [ingresos, setIngresos] = useState([])
  
  useEffect( () => {
    fetch('http://localhost:3002/api/ingresos')
    .then( (res) => res.json())
    .then( (ingresos) => setIngresos(ingresos.ingresos))
    
    
  }, [] )
  
  console.log(ingresos)

  return (
    
      <div className="container my-4">

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Telefono</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
        { ingresos.map(ing => {
            return (
                <tr key= {ing._id}>
                  <td>{ing.nombre}</td>
                  <td>{ing.descripcion}</td>
                  <td>{ing.telefono}</td>
                  <td><Button variant="success">Listo</Button></td>
                </tr>
                );
              })}
          
        </tbody>
      </Table>
      </div>
  
  );
}

export default IngresoBoot