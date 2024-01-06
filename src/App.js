import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink,
  Outlet,
} from "react-router-dom";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Updates from "./pages/Updates";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* outlet */}
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
        <Route path="sponsors" element={<Sponsors />}/>
        <Route path="about" element={<About />}/>
        <Route path="updates" element={<Updates />}/>
        {/* outlet */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;

// RouterLayout and Component
const RootLayout = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Navbar />,
        document.getElementById("navbar-container")
      )}
      {/* {ReactDOM.createPortal(
        <Footer />,
        document.getElementById("footer")
      )} */}
      <Outlet />
    </>
  );
};
