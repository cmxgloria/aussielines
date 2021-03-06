import React from "react";
import map from "../photos/Screen Shot 2020-08-22 at 12.21.38 pm.png";
import qvm from "../photos/Screen Shot 2020-08-22 at 12.32.35 pm.png";
import "./contact.styles.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div className="contact">
          <div className="info">
            <ul>
              <li>Trading Information</li>
              <h3>Email: aussielines@hotmail.com</h3>
              <h3>Address: Queen Victoria Market</h3>

              <ol>Tuesday: D shed 51-54 9am-3pm</ol>
              <ol>Thursday: D shed 51-54 9am-3pm</ol>
              <ol>Friday: D shed 51-54 9am-3pm</ol>
              <ol>Saturday: D shed 51-54 9am-3pm</ol>
              <ol>Sunday: D shed 51-54 9am-3pm</ol>
            </ul>
          </div>
          <div className="history">
            <ul>
              <li>History</li>
              Aussielines is a family business trading in the Queen Victoria
              Market since 2007. We specially supply premium Australian gifts
              ranging from authentic boomeranges, soft toys, canvas bags to key
              rings. We have a guarantee return/refund policy for any product
              you may be dissatisfied with.
            </ul>
          </div>
          <h4>BEST PRICE! BEST QUALITY!</h4>
        </div>
        <div className="bottom">
          <img src={map} alt="map" />
          <img src={qvm} alt="qvm" />
        </div>
      </div>
    );
  }
}

export default Contact;
