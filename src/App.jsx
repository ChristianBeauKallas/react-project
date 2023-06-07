import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Is So Cool!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is so cool!</p>
        <p>So cool, is React!</p>
        <ul>
          <li>React</li>
          <li>Is</li>
          <li>So Cool</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> </p>
      </header>
    </div>
  );
}

export default App;
