import React from "react";
import Specials from "./Specials/Specials.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Intro from "./Intro/Intro.jsx";
import About from "./About/About.jsx";

const Home = () => (
  <main>
    <Intro />
    <Specials />
    <Testimonials />
    <About />
  </main>
);

export default Home;
