import React from "react";
import "./contact.styles.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <ul>
          <li>Trading Information</li>
          <h3>Email: smile168@live.com.au</h3>
          <h3>Address: Queen Victoria Market</h3>
          <span>Tuesday: D shed 51-54 9am-3pm</span>
          <span>Thursday: D shed 51-54 9am-3pm</span>
          <span>Friday: D shed 51-54 9am-3pm</span>
          <span>Saturday: D shed 51-54 9am-3pm</span>
          <span>Sunday: D shed 51-54 9am-3pm</span>
          <li>History</li>
          Aussielines is a family business trading in the Queen Victoria Market
          since 2007. We specially supply premium Australian gifts ranging from
          authentic boomeranges, soft toys, canvas bags to key rings. We have a
          guarantee return/refund policy for any product you may be dissatisfied
          with.
          <h1>BEST PRICE! BEST QUALITY!</h1>
        </ul>
      </div>
    );
  }
}

export default Contact;
