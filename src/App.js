import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserData from './components/UserData';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      
      <Router>
        <Routes>
          <Route exact path='/' element={<UserData />}></Route>
          <Route exact path='/Display' element={<Display />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
