import React from "react";
import OhmsLaw from "./component/OhmsLaw";
import { Routes, Route } from "react-router-dom";
import Nevbar from "./component/Nevbar";
import Home from "./component/Home";
import Resistance from "./component/Resistance";

function App() {
  return (
    <div className=" grid grid-cols-[200px_minmax(900px,_1fr)_100px] min-h-screen	 gap-2 p-1 ">
      <div className=" shadow-lg">
        <Nevbar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ohms" element={<OhmsLaw />} />
          <Route path="/resistance" element={<Resistance/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
