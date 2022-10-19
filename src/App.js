import logo from './logo.svg';
import './App.css';

import { useSelector } from './react-redux';
import { useCallback } from 'react';

import { Increase } from './components/Increase';
import { Decrease } from './components/Decrease';
import { BigIncrease } from './components/BigIncrease';
import { BigDecrease } from './components/BigDecrease';
import Component1 from './components/Component1';

function App() {
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
                <Increase />

                <Decrease />
                <BigIncrease />
                <BigDecrease />
                <Component1 />
                <p>Count = {count}</p>
            </header>
        </div>
    );
}

export default App;
