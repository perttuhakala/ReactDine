import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar} from './components/navbar';
import {Menu} from "./pages/menu";
import {Cart} from "./pages/cart";

function App() {
  return (
  <div className="App">

  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>
  </div>
  );
}

export default App;