import React, { useState } from "react";

const OhmsLaw = () => {
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [resistance, setResistance] = useState(0);

  const calculate = () => {
    if (voltage === 0) {
      setCurrent(0);
      setResistance(0);
    } else if (current === 0) {
      setVoltage(0);
      setResistance(0);
    } else {
      setResistance(voltage / current);
    }
    setVoltage("");
    setCurrent("");
  };

  let res = resistance.toFixed(2);

  return (
    <>
      <div className="flex flex-col items-center shadow-xl m-3 bg-gradient-to-br from-blue-500 to-blue-100 w-72 p-2 rounded-lg">
        <h1 className="text-center p-2 font-bold">Ohms Law Calculator</h1>
        <div className=" flex flex-col">
          <div className=" flex flex-col">
            <label className="text-center mb-1" htmlFor="">
              Enter Voltage
            </label>
            <input
              type="number"
              className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center m-1" htmlFor="">
              Enter Current
            </label>
            <input
              type="number"
              className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={calculate}>Calculate</button>
          {
            (res = "" ? (
              <h2 className="text-center"> </h2>
            ) : (
              <h2 className="text-center">Resistance: {res} Ohms</h2>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default OhmsLaw;
