import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Instructions from "./Instructions";
import Students from "./Students";
import Results from "./Results";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/students/2">
          Students #2
        </Link>
        <Link className="link" to="/results/john">
          Results John
        </Link>
      </nav>
      <Instructions />
      <p className="block">Create your routing here! (Routes & Route)</p>
      <Routes>
        <Route path="/students/:id" element={<Students />} />
        <Route path="/results/:name" element={<Results />} />
      </Routes>
    </div>
  );
}
