import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage/index";
import DetailPage from "./pages/DetailPage/index";
import SearchPage from "./pages/SearchPage/index";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
