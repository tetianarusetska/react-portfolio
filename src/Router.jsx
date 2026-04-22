import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home.jsx";

export default function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Home />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}