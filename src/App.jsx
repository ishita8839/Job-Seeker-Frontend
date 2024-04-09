import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed top-0 w-full bg-white shadow-md">
        <Navbar />
      </div>
      <div className="w-[85%] m-auto bg-white mt-20">
        <Search />
        <Jobs />
        <Value />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
