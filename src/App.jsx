import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Adminpanal from "./pages/Adminpanal";
import Navbar from "./Navbar/Navbar";
import Domhost from "./pages/Domhost";
import AuthButtons from "./pages/Home";
import Details from "./pages/Details";
import Decidepage from "./pages/Decidepage";
import { Domregister } from "./pages/Domregister";
import DomUserDetails from "./pages/DomUserDetails ";

const App = () => {
  const location = useLocation();
  const [available, setAvailable] = useState(false);

  // Routes that should show the navbar when user is authenticated
  const navbarRoutes = ["/admin", "/domhost", "/details", "/domuserdetails"];

  useEffect(() => {
    // Check localStorage on component mount
    const storedAvailable = localStorage.getItem("available") === "true";
    setAvailable(storedAvailable);
  }, []);

  const handleSetAvailable = (value) => {
    try {
      setAvailable(value);
      localStorage.setItem("available", String(value));
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  };

  // Simplified navbar visibility logic
  const shouldShowNavbar =
    available &&
    navbarRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <div className="flex w-full">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthButtons />} />
        <Route
          path="/login"
          element={<Login setAvailable={handleSetAvailable} />}
        />
        <Route
          path="/register"
          element={<Register setAvailable={handleSetAvailable} />}
        />
        <Route path="/admin" element={<Adminpanal />} />
        <Route path="/decide" element={<Decidepage />}>
          <Route
            index
            element={<Register setAvailable={handleSetAvailable} />}
          />
          <Route
            path="register"
            element={<Register setAvailable={handleSetAvailable} />}
          />
          <Route
            path="domregister"
            element={<Domregister setAvailable={handleSetAvailable} />}
          />
        </Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/domhost" element={<Domhost />} />
        <Route path="/domuserdetails/:id" element={<DomUserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
