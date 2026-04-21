import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home.jsx";

export default function Router() {
  
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Home />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}