import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar} from './components/navbar';
import {Menu} from "./pages/menu";
import {Cart} from "./pages/cart";
import { MenuContextProvider } from "./menu-context";

function App() {
  return (
  <div className="App">
  <MenuContextProvider>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>
  </MenuContextProvider>
  </div>
  );
}

export default App;