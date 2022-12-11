// import { useState } from 'react'

import "./App.css";
// import './css/queries.css'
import { Featured } from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Meals from "./components/Meals/Meals";
import NavBar from "./components/Navbar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer"
import Cta from "./components/CTA/Cta";
// import Features from "./components/Features/Features";

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
        {/* <Features /> */}
        <Cta />
        <Footer />
      </main>
    </div>
  );
}

export default App;
