import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';

const App = () => {

    const [data, setData] = useState(null)

    useEffect( () => {
      fetch('http://localhost:3001/api')
      .then( (res) => res.json())
      .then( (data) => setData(data.message))

     

    }, [] )


    return(

      <div className="App">
        <header className="App-header">
          <h1>App React PlanetaIT desde Node</h1>
          <h4> {data} </h4>

        </header>
      </div>

    )
  


}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
    
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
