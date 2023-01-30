import React from "react"
import axios from "axios";
import {useState} from "react"


const SignUp = (props) =>  {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  



    
    const handleSubmit = async (e) => {

      e.preventDefault();

      try {

        await axios.post("http://localhost:3002/api/signup",
        {username, password} 
        )} 
        catch(err) {

      }

    }

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form" action="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrate</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              name="username"
              onChange={(e) => {setUsername(e.target.value)}}
              className="form-control mt-1"
              placeholder="Ingrese su usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {setPassword(e.target.value)}}
              className="form-control mt-1"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </div>
      </form>
      <br/>
      <p>OR</p>
      <br/>

      <Link to="/login"> Login Page</Link>
    </div>
  )
}

export default Login