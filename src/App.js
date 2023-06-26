
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.clear();
    navigate("https://calm-moccasins-goat.cyclic.app/login")
  }
  return (
    <div className="App">
      <Link to="/signup">Signup</Link> <br />
      <Link to="/login">Login</Link><br />
      <button onClick={handlelogout}>Log out</button><br />
      <Link to='/create'>Create</Link><br />
            <Link to='/update'>update</Link><br />
            <Link to='/delete'>delete</Link><br />
   <AllRoutes/>
    </div>
  );
}

export default App;
