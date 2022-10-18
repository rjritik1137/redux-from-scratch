import logo from './logo.svg';
import './App.css';
import { DECREMENT, INCREAMENT } from './constants';
import { useDispatch, useSelector } from './react-redux';
import { useCallback } from 'react';
import App2, { App3 } from './Apps';

function App() {
    const dispatch = useDispatch();
    const selector = useCallback((state) => state.counter.count, []);
    const count = useSelector(selector);

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
                <button
                    onClick={() => {
                        dispatch({ type: INCREAMENT });
                    }}
                >
                    Increase
                </button>

                <button
                    onClick={() => {
                        dispatch({ type: DECREMENT });
                    }}
                >
                    Decrease
                </button>
                <p>Count = {count}</p>
                <App2 />
                <App3 />
            </header>
        </div>
    );
}

export default App;
