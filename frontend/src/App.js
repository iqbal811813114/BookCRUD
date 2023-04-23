import './App.css';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/books" element={<Books/>}/>
        <Route  path="/addbooks" element={<AddBooks/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
