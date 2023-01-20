

const Ingresos = async () => {

const [data, setData] = useState(null)

useEffect( () => {
  fetch('http://localhost:3002/api/ingresos')
  .then( (res) => res.json())
  .then( (data) => setData(data.message))

 

}, [] )


return(

  <div className="App">
    <header className="App-header">
        
      <h4> {data} </h4>

    </header>
  </div>

)
}

export default Ingresos

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