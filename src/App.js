import logo from './logo.svg';
import './App.css';
import { store } from '.'
import { DECREMENT, INCREAMENT } from './constants'


function App() {
  const {dispatch, getState } = store
  console.log(getState())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>{
          dispatch({type: INCREAMENT })
        }}>Increase</button>

        <button onClick={()=>{
          dispatch({type: DECREMENT })
        }}>Decrease</button>
        <p>Count = {getState().count}</p>
      </header>
    </div>
  );
}

export default App;
