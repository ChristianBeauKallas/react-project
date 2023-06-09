// import logo from './logo.svg';
import './App.css';
import React from 'react'
import FilmsList from './components/FilmsList'
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
    onSubmit(event) {
      event.preventDefault()
      let newList = [...this.state.list, this.state.text]
      this.setState({list: newList, text: " "})
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit = {this.onSubmit}>
          <input type="text" value = {this.state.text} 
          onChange={(e) => this.setState({text: e.target.value})}
          />
          <button type='submit'>Add</button>
            <ul>
            {this.state.list.map((task, id)=> {
            return <li key={id}>{task}</li>
            })}
            </ul>
        </form>
        <FilmsList />
      </div>
    );
  }
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
