import React from "react";


const Resistance = () => {

  return (
    <div className=" bg-gray-400">
      <div>
        <h1>Resistance of a Conductor</h1>
        <h2>Result</h2>
        <p>Total resistance of the conductor is 8.5452318438602 ohm (Ω).</p>
      </div>
      <div>
        <table className="table-auto">
          <form action="/resistor-calculator" name="calform3"></form>
          <thead>
            <tr>
              <th className="px-4 py-2">
                <label htmlFor="Length">Length</label>
              </th>
              <th className="px-4 py-2">
                <label htmlFor="Diameter">Diameter</label>
              </th>
              <th className="px-4 py-2">
                <label htmlFor="Conductivity">Conductivity</label>
              </th>
              <th className="px-4 py-2">
                <label htmlFor="Select Material">Select Material</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <tr>
                <td align="">Length:</td>
                <td>
                  <input
                    type="text"
                    name="length"
                    value="100"
                    className=""
                    onkeyup=""
                  />
                  <select name="lengthunit" className="">
                    <option value="foot">feet</option>
                    <option value="yard">yards</option>
                    <option value="inch">inches</option>
                    <option value="mile">miles</option>
                    <option value="meter" selected="">
                      meters
                    </option>
                    <option value="kilometer">kilometers</option>
                    <option value="centimeter">centimeters</option>
                  </select>
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td align="">Diameter:</td>
                <td>
                  <input
                    type="text"
                    name="diameter"
                    value="0.05"
                    className="inhalf"
                    onkeyup="iptfieldCheck(this, 'r', 'pn');"
                  />
                  <select name="diameterunit" className="inhalf">
                    <option value="inch">inches</option>
                    <option value="foot">feet</option>
                    <option value="yard">yards</option>
                    <option value="millimeter">millimeters</option>
                    <option value="centimeter" selected="">
                      centimeters
                    </option>
                    <option value="meter">meters</option>
                  </select>
                </td>
              </tr>
            </tr>
            <tr>
              <tr>
                <td align="">Conductivity:</td>
                <td>
                  <input
                    type="text"
                    name="conductivity"
                    id="conductivity"
                    value="59600000"
                    className="inhalf"
                    onkeyup="iptfieldCheck(this, '', 'pzn');"
                  />
                  S/m &nbsp; &nbsp; &nbsp;<b>Or Select Material</b>{" "}
                  <select
                    name="conductivitymaterial"
                    onchange="document.getElementById('conductivity').value=this.value;return false;"
                  >
                    <option value="63000000">Silver</option>
                    <option value="59600000" selected="">
                      Copper
                    </option>
                    <option value="58000000">Annealed Copper</option>
                    <option value="45200000">Gold</option>
                    <option value="37800000">Aluminium</option>
                  </select>
                </td>
              </tr>
            </tr>
              <tr>
                <td colspan="2" align="">
                  <input type="hidden" name="type" value="r" />
                  <input
                    type="image"
                    src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculate.svg"
                    value="Calculate"
                    alt="Calculate"
                    style={{ "margin-top": "10px" }}
                  />
                  <img
                    src=""
                    alt=""
                    onclick="clearForm(document.calform3);"
                    className="clearbtn"
                  />
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resistance;
