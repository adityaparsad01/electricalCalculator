import React from "react";
import { Link } from "react-router-dom";

const list = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Ohms Calculator",
    path: "/ohms",
  },
  {
    name: "Voltage Calculator",
    path: "/voltage",
  },
  {
    name: "Resistance Calculator",
    path: "/resistance",
  }
];

const Nevbar = () => {
  return (
    <div className="max-w-lg p-2">
      <h1>Electricals Calculator</h1>
      <div className="grid grid-cols-1 gap-3 mt-3">
        {list.map((item) => (
          <Link className="navbar-brand bg-gray-100 rounded-lg p-2 text-center" to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nevbar;
