
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import {Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Link to="/signup">Signup</Link> <br />
      <Link to="/login">Login</Link>
   <AllRoutes/>
    </div>
  );
}

export default App;
