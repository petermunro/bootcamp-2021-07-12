import { Link, Route, Switch, Redirect } from 'react-router-dom';
import CarTool from './components/cartool/CarTool';
import { ColorTool } from './components/colortool/ColorTool';
import CalcToolContainer from './components/calctool/CalcToolContainer';
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
              <Link to="/hello">Hello</Link>
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
              <Link to="/calctool">CalcTool</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Redirect to="/hello" />
          </Route>
          <Route path="/hello">
            <Hello />
          </Route>
          <Route path="/clickdemo">
            <ClickDemo />
          </Route>
          <Route path="/colortool">
            <ColorTool />
          </Route>
          <Route path="/cartool">
            <CarTool />
          </Route>
          <Route path="/calctool">
            <CalcToolContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
