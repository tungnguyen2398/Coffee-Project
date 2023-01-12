import Home from "./Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <div>
          <Navbar />    
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>           
          <Outlet />
        </div>
    </div>
  );
}

export default App;
