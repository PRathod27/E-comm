import AllRoutes from './AllRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
              <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
