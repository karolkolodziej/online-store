import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/buy" component={Buy} />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
