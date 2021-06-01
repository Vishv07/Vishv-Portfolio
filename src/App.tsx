import React from "react";
import { Navbar, Profile, Experience, Projects, Footer } from "./Interface";

import "./App.css";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="safeAreaView">
          <Profile />
          <Experience />
          <Projects />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
