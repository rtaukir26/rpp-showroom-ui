import React from "react";
import {
  BrandLog,
  HeroLogo,
  MenuImg,
  Products,
  SearchIcon,
  SocialMedia,
  TrendingProducts,
} from "../../utils/images";
import Product from "./Product";
import Card from "./Card";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="landing-main">
      <div className="landing-header">
        <div className="header-logo">
          <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
        </div>
        <ul className="header-list df-ac-je">
          <li>Sign in</li>
          <li>Sign out</li>
        </ul>
      </div>
      <div className="landing-body">
        <div className="wrapper">
          <div className="content-con">
            <h1>
              <span className="highlight">Trusted</span> and best quality
              vehicle parts to boost your vehicle{" "}
              <span className="highlight" style={{ background: "#4353a5b8" }}>
                long.
              </span>
            </h1>
            <span>Most selling parts of the month</span>
            <div className="products-con ">
              <div className="products">
                <Product img={TrendingProducts["p1"]} cls="p1" />
                <Product img={TrendingProducts["p2"]} cls="p2" />
                <Product img={TrendingProducts["p1"]} cls="p3" />
                <Product img={TrendingProducts["p2"]} cls="p4" />
                <Product img={TrendingProducts["p1"]} cls="p5" />
                <Product img={TrendingProducts["p2"]} cls="p6" />
              </div>
            </div>
          </div>
          <div className="img-con">
            <img
              className="main-img"
              src={HeroLogo.imgFile}
              alt={HeroLogo.imgName}
            />
            <div className="brand-name">
              <p>
                A website where you can trust and buy all parts of your vehicle.
              </p>
              <div className="social-con">
                <span>visit our more platforms.</span>
                <div className="social df-ac-js">
                  <div>
                    <img src={SocialMedia["facebook"]} alt="facebook" />
                  </div>
                  <div>
                    <img src={SocialMedia["insta"]} alt="insta" />
                  </div>
                  <div>
                    <img src={SocialMedia["facebook"]} alt="facebook" />
                  </div>
                  <div>
                    <img src={SocialMedia["insta"]} alt="insta" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* products container */}
        <div className="all-products shadow">
          <div className="menu">
            <ul className="main-ul">
              <li className="li-heading">
                Engine Components
                <ul className="sub-ul">
                  <li className="d-flex align-items-center">
                    <img src={MenuImg["filter"]} alt="engine" />
                    Filters
                  </li>
                  <li>
                    <img src={MenuImg["belt"]} alt="engine" />
                    Belts and Chains
                  </li>
                  <li>
                    <img src={MenuImg["components"]} alt="engine" />
                    Pistons and Rings
                  </li>
                  <li>
                    <img src={MenuImg["filter"]} alt="engine" />
                    Valves and Camshafts
                  </li>
                </ul>
              </li>
              <li className="li-heading">
                Electrical Components
                <ul className="sub-ul">
                  <li>
                    <img src={MenuImg["components"]} alt="engine" /> Batteries
                  </li>
                  <li>
                    <img src={MenuImg["filter"]} alt="engine" />
                    Alternators and Starters
                  </li>
                  <li>
                    <img src={MenuImg["belt"]} alt="engine" />
                    Wiring and Fuses
                  </li>
                  <li>
                    {" "}
                    <img src={MenuImg["filter"]} alt="engine" />
                    Switches
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
          <div className="all-product-body">
            <div className="search-con">
              <div className="search">
                <img src={SearchIcon.imgFile} alt={SearchIcon.imgName} />
                <input type="text" placeholder="search parts" />
              </div>
            </div>
            <div className="product-wrapper">
              <Card
                img={Products["battery"]}
                desc="Lorem ipsum dolor sit amet consectetur,
                provident."
                price="299"
              />
              <Card
                img={Products["battery2"]}
                desc=" adipisicing elit. Cupiditate,
                provident."
                price="299"
              />
              <Card
                img={Products["piston2"]}
                desc=" This is the adipisicing elit. Cupiditate,
                provident."
                price="299"
              />
              <Card
                img={Products["spray2"]}
                desc=" This is the adipisicing
                provident."
                price="299"
              />
              <Card
                img={Products["piston"]}
                desc=" This is the adipisicing
                provident."
                price="299"
              />
              <Card
                img={Products["pipe"]}
                desc=" This is the adipisicing
                provident."
                price="299"
              />
              <Card
                img={Products["spray2"]}
                desc=" This is the adipisicing yeild the most
                provident."
                price="299"
              />
              <Card
                img={Products["piston2"]}
                desc=" This is the adipisicing and the
                provident."
                price="299"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Clients */}
      <Footer />
    </div>
  );
};

export default Landing;
