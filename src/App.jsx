import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showNavbar, hideNavbar } from "./redux/navbarSlice";

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
  const dispatch = useDispatch();
  const show = useSelector((state) => state.navbar.showNavbar);

  const navbarRoutes = ["/admin", "/domhost", "/details", "/domuserdetails"];

  useEffect(() => {
    const available = localStorage.getItem("available") === "true";
    const shouldShow =
      available &&
      navbarRoutes.some((route) => location.pathname.startsWith(route));
    if (shouldShow) dispatch(showNavbar());
    else dispatch(hideNavbar());
  }, [location.pathname, dispatch]); // Added dispatch to dependency array

  return (
    <div className="flex w-full">
      {show && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthButtons />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Adminpanal />} />
        <Route path="/decide" element={<Decidepage />}>
          <Route index element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="domregister" element={<Domregister />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/domhost" element={<Domhost />} />
        <Route path="/domuserdetails/:id" element={<DomUserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
