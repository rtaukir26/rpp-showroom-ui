import React from "react";
import { MenuImg } from "../../utils/images";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="main-ul">
        <li className="li-heading">
          Engine Components
          <ul className="sub-ul">
            <li className="d-flex align-items-center">
              <img src={MenuImg["filter"]} alt="engine" />
              <span>Filters</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["belt"]} alt="belt" />
              <span>Belts and Chains</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["piston"]} alt="piston" />
              <span>Pistons and Rings</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["valve"]} alt="engine" />
              <span>Valves and Camshafts</span>
            </li>
          </ul>
        </li>
        <li className="li-heading">
          Electrical Components
          <ul className="sub-ul">
            <li className="d-flex align-items-center">
              <img src={MenuImg["battery"]} alt="battery" />
              <span>Batteries</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["ac"]} alt="ac" />
              <span>Alternators and Starters</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["wire"]} alt="wire" />
              <span>Wiring and Fuses</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={MenuImg["switch"]} alt="switch" />
              <span>Switches</span>
            </li>
          </ul>
        </li>
        <li className="li-heading">
          Suspension and Steering
          <ul className="sub-ul">
            <li>Shock Absorbers and Struts</li>
            <li>Ball Joints</li>
            <li>Tie Rods</li>
            <li>Steering Racks and Columns</li>
          </ul>
        </li>
        <li className="li-heading">
          Tyres and Wheels
          <ul className="sub-ul">
            <li>Tyres</li>
            <li>Rims and Alloys</li>
            <li>Wheel Bearings</li>
            <li>Wheel Alignment Kits</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
