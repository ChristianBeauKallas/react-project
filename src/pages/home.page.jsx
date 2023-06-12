// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FilmsList from './components/FilmsList'

export function HomePage () {
const [list, setList] = useState(["ready", "set", "GO"]);
const [text, setText] = useState("");

function handleSubmit(event){
    event.preventDefault()

    setList([...list, text])
}
    return (
    <div className="App">
        <h1>Hello Venus</h1>
        <form onSubmit = {handleSubmit}>
        <input type="text" name = "text" id="text" value={text} onChange={(event) => 
            setText(event.target.value)}/>
        <button type='submit'>Add</button>
            <ul>
            {list.map((task, id)=> {
            return <li key={id}>{task}</li>
            })}
            </ul>
        </form>
        <FilmsList />
    </div>
    );
}

// function App() {
//   return (
//     <div className="App"> 
//       <header className="App-header">
//         <h1>React Is So Cool!</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>React is so cool!</p>
//         <p>So cool, is React!</p>
//         <ul>
//           <li>React</li>
//           <li>Is</li>
//           <li>So Cool</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p> </p>
//       </header>
//     </div>
//   );
// }

export default App;