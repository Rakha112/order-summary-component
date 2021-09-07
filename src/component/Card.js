import React from "react";
import hero from "../images/illustration-hero.svg";
import music from "../images/icon-music.svg";

function Card() {
  return (
    <div className="container">
      <div className="card" id="card">
        <div className="hero">
          <img src={hero} alt="illustration-hero" />
        </div>
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcast on
          any device anywhere you like!
        </p>

        <div className="plan">
          <img src={music} alt="icon-music" />
          <div className="jenis_plan">
              <p>
                Annual Plan <span>$59.99/year</span>
              </p>
          </div>
          <a href="#card">Change</a>
        </div>
        <div className="button">
          <button>Proceed to Payment</button>
        </div>
        <div className="cancel">
          <a href="#card">Cancel Order</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
