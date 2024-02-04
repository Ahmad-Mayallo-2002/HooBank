import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { Features } from "./components/Features";
import { Companies } from "./components/Companies";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <Companies />
      <Footer />
    </>
  );
}

export default App;
