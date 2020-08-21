import React from "react";
import stall2 from "../photos/stall2.jpg";
import stall1 from "../photos/stall1.jpg";
import PLATE4 from "../photos/PLATE4.jpg";

import "./shop-photos.styles.scss";

function ShopPhotos() {
  return (
    <div className="shop-header">
      <div className="shop-photos">
        <img src={stall2} alt="stall2" />
        <img src={stall1} alt="stall1" />
        <img src={PLATE4} alt="plate" />
      </div>
      <p>
        Aussielines -- Australian Souvenirs in Queen Victoria Market Melbourne
      </p>
    </div>
  );
}

export default ShopPhotos;
