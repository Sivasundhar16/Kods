import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Adminpanal from "./pages/Adminpanal";
import Navbar from "./Navbar/Navbar";
import Domhost from "./pages/Domhost";
import AuthButtons from "./pages/Home";
import Details from "./pages/Details";
import Decidepage from "./pages/Decidepage";

const App = () => {
  const location = useLocation();
  const [available, setAvailable] = useState(() => {
    return localStorage.getItem("available") === "true";
  });

  const handleSetAvailable = (value) => {
    setAvailable(value);
    localStorage.setItem("available", value);
  };

  const showNavbarRoutes = ["/admin", "/domhost", "/details"];
  const shouldShowNavbar =
    available &&
    showNavbarRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <div className="flex w-full">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthButtons />} />
        <Route
          path="/login"
          element={<Login setAvalable={handleSetAvailable} />}
        />
        <Route
          path="/register"
          element={<Register setAvalable={handleSetAvailable} />}
        />
        <Route path="/admin" element={<Adminpanal />} />
        <Route path="/domhost" element={<Domhost />} />
        <Route path="/decide" element={<Decidepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
