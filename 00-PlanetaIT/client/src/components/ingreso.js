import {useState, useEffect} from 'react'

export const Ingresos = async () => {

const [data, setData] = useState([])

useEffect( async () => {
   fetch('http://localhost:3002/api/ingresos')
  .then( (res) => res.json())
  .then( (data) => setData(data))

 

}, [] )


return (

  <div className="App">
    <header className="App-header">
        
      <h4> {data.nombre} </h4>
      <h4> {data.descripcion} </h4>

    </header>
  </div>

)
}


// const Ingresos = async () => {

//     try{

//         const items = await ProductsModel.find(query);

//         res.json({
//           data: items,
//         });


//     } catch (err) {
//         resizeBy.status(500).json({
//             error: err.message,
//             stack: err.stack
//         });
//     }

// }

// export default Ingresos