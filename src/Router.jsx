import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Impressum from "./pages/footerPages/Impressum.jsx"
import Datenschutz from "./pages/footerPages/Datenschutz.jsx"
import Contact from "./pages/footerPages/FooterContact.jsx"
import Project1 from './pages/projects/Project1.jsx'
import Project2 from './pages/projects/Project2.jsx'
import Project3 from './pages/projects/Project3.jsx'
import SecondPage from "./pages/AboutMe.jsx"
import FourthPage from "./pages/Projects.jsx"
import FifthPage from "./pages/Contact.jsx"

import ScrollToHash from "./components/ScrollToHash.jsx"


export default function Router() {

  return (
    <>
      <ScrollToHash />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/#aboutme" element={<SecondPage />} />
        <Route path="/#projects" element={<FourthPage />} />
        <Route path="/#contact" element={<FifthPage />} />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/footer-contact" element={<Contact />} />

        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />

      </Routes>
    </>
  )
}