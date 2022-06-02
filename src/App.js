import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPets from "./components/MyPets";
import Create from "./components/Create";

function App() {
  return (
    
    <div id="container">
        
        <Header />
        <main id="site-content">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/create" element={<Create />} />
        </Routes>
        </main>

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>

  );
}

export default App;
