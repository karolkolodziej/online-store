import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { TShirts } from "./pages/TShirts";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/t-shirts" component={TShirts} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
