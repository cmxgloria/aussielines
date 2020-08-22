import React from "react";
import stall2 from "../photos/stall2.jpg";
import qvm from "../photos/central-station-2661255__480.jpg";
import PLATE4 from "../photos/PLATE4.jpg";

import "./shop-photos.styles.scss";

function ShopPhotos() {
  return (
    <div className="shop-header">
      <div className="shop-photos">
        <img src={stall2} alt="stall2" />
        <img src={qvm} alt="qvm" />
        <img src={PLATE4} alt="plate" />
      </div>
      <p>
        Aussielines -- Australian Souvenirs in Queen Victoria Market Melbourne
      </p>
    </div>
  );
}

export default ShopPhotos;
