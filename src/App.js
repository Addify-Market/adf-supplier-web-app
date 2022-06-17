import './App.css';
import {Navbar,Footer} from './components'
import {Profile,Item, Create,Login,SuuplierRegister,Supplier, SupplierMyAddon} from './pages'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Supplier />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/supplier/register" element={ <SuuplierRegister />} />
            <Route path="/supplier/dashboard" element={ <Supplier />} />
            <Route path="/supplier/myaddons" element={ <SupplierMyAddon />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
