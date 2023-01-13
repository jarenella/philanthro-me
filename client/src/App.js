import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchOrgs from "./pages/SearchOrgs";

function App() {
  return (
    <Router>
    <>
      <NavBar />
      <Routes>
            <Route path="/" element={<SearchOrgs />} />
          
            
          </Routes>
    </>
    </Router>
  );
}

export default App;
