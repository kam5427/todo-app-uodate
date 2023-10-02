import './App.css';
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Anaconda from "./components/Anaconda";
import Dragon from "./components/Dragon";
import Header from "./components/Header";

function App() {
   return (
         <>
            <Header />
             <Routes>
                 <Route path="/projects" element={<Projects />} />
                 <Route path="/projects/anaconda" element={<Anaconda />} />
                 <Route path="/projects/dragon" element={<Dragon />} />
             </Routes>
         </>


   )



}

export default App;
