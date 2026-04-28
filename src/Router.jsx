import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import Project1 from './pages/projects/Project1.jsx'
import Project2 from './pages/projects/Project2.jsx'
import Project3 from './pages/projects/Project3.jsx'
import Impressum from "./pages/footer-pages/Impressum.jsx"
import Datenschutz from "./pages/footer-pages/Datenschutz.jsx"
import FooterContact from "./pages/footer-pages/FooterContact.jsx"



import ScrollToHash from "./components/ScrollToHash.jsx"


export default function Router() {

  return (
    <>
      <ScrollToHash />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/#aboutme" element={<AboutMe />} />
        <Route path="/#projects" element={<Projects />} />
        <Route path="/#contact" element={<Contact />} />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/footer-contact" element={<FooterContact />} />

        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />

      </Routes>
    </>
  )
}