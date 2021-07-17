import { Link, Route } from 'react-router-dom';
import CarTool from './components/cartool/CarTool';
import { ColorTool } from './components/colortool/ColorTool';
import ClickDemo from './ClickDemo';
import Hello from './Hello';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/colortool">Color Tool</Link>
            </li>
            <li>
              <Link to="/cartool">Car Tool</Link>
            </li>
            <li>
              <Link to="/clickdemo">ClickDemo</Link>
            </li>
            <li>
              <Link to="/hello">HelloDemo</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {/* ------------------------------------------------------------ */}
        <Route path="/clickdemo">
          <ClickDemo />
        </Route>
        <Route path="/hello">
          <Hello />
        </Route>
        <Route path="/colortool">
          <ColorTool />
        </Route>
        <Route path="/cartool">
          <CarTool />
        </Route>
        <hr />
        {/* ------------------------------------------------------------ */}
        <Route>
          <p>Matches everything</p>
        </Route>
      </div>
    </Router>
  );
}

export default App;
