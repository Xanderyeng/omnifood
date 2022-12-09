// import { useState } from 'react'

import "./App.css";
import { Featured } from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Meals from "./components/Meals/Meals";
import NavBar from "./components/Navbar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <Hero />
        <Featured />
        <How />
        <Meals />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}

export default App;
