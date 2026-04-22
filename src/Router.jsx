import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Impressum from "./pages/footerPages/impressum.jsx"
import Datenschutz from "./pages/footerPages/datenschutz.jsx"
import Contact from "./pages/footerPages/contact.jsx"
import Project1 from './pages/projects/project1.jsx'

export default function Router() {

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/project1" element={<Project1 />} />

    </Routes>
  );
}