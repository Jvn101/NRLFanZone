import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Teams } from "./components/Teams";
// import { Skills } from "./components/Skills";
import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Routes>
          <Route 
            path='/'
            element={<Projects/>}>
          </Route>
          <Route 
            path='/teams/:teamId'
            element={<Teams/>}>
          </Route>
          {/* <Route 
            path='/skills'
            element={<Skills/>}>
          </Route> */}
        </Routes>
        {/* <Projects /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
