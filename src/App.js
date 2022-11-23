import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
