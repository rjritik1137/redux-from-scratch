import logo from './logo.svg';
import './App.css';

import { Increase } from './components/Increase';
import { Decrease } from './components/Decrease';
import { BigIncrease } from './components/BigIncrease';
import { BigDecrease } from './components/BigDecrease';
import Component1 from './components/Component1';
import { Counter } from './components/Counter';
import { AsyncCounter } from './components/AsyncComponent';

function App() {
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
                <Counter />
                <Increase />
                <br />
                <Decrease />
                <br />
                <BigIncrease />
                <BigDecrease />
                <Component1 />
                <AsyncCounter />
            </header>
        </div>
    );
}

export default App;
