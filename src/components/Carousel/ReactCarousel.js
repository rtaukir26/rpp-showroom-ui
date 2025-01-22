// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { Products } from "../../utils/images";
// function ReactCarousel() {
//   return (
//     <Carousel>
//       <div>
//         <img src={Products["allp"]} />
//         {/* <p className="legend">Legend 1</p> */}
//       </div>
//       <div>
//         <img src={Products["compressor"]} />
//         {/* <p className="legend">Legend 2</p> */}
//       </div>
//       <div>
//         <img src={Products["pipe"]} />
//         {/* <p className="legend">Legend 3</p> */}
//       </div>
//     </Carousel>
//   );
// }

import React from "react";
import Carousel from "better-react-carousel";

function ReactCarousel() {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={10}
      loop
      showDots={true}
      // autoplay={3000}
    >
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>anything you want to show in the grid</Carousel.Item>
      {/* ... */}
    </Carousel>
  );
}
export default ReactCarousel;
const Card = ({ index }) => (
  <div className="card">
    <h1>Card {index}</h1>
    <p>
      liprum iprum liprum iprum liprum iprum liprum iprum liprum iprum liprum
      iprum
    </p>
    <button>Read more</button>
  </div>
);

export { Card };
