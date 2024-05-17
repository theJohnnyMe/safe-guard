"use client";
import { TdsButton } from "@scania/tegel-react";
import "./page.scss";
import Truck from "../components/truck";

export default function PriceComparison() {
  return (
    <div className="price-comparison">
      <div className="price-comparison__price tds-container-fluid">
        <p className="price-comparison__price-text tds-detail-02 tds-u-opacity-60">
          Your price
        </p>
        <h1 className="price-comparison__price-headline tds-headline-01">
          1100{" "}
          <span className="price-comparison__price-headline-kronor tds-headline-05">
            kr/mo
          </span>
        </h1>
        <TdsButton
          className="tds-u-pb2"
          size="lg"
          fullbleed={true}
          text="Sign up!"
        ></TdsButton>
        <button className="secondary-button">See my information</button>
      </div>

      <div className="price-comparison__your-info  price-comparison__your-extra-info tds-container-fluid">
        <div>
          <h2 className="price-comparison__your-info_headline tds-headline-05">
            Compare rates
            <span>
              <Truck />
            </span>
          </h2>
        </div>
        <table className="price-comparison_your-info__table tds-u-opacity-60">
          <tbody>
            <tr>
              <th>Registration Number</th>
              <td>EKY 055</td>
            </tr>
            <tr>
              <th>Driving Performance Score</th>
              <td>B</td>
            </tr>
            <tr>
              <th>Driver Age</th>
              <td>42</td>
            </tr>
            <tr>
              <th>Infractions</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Average Monthly Drive Time</th>
              <td>223 hrs</td>
            </tr>
            <tr>
              <th>Average Annual Distance</th>
              <td>102,489 km</td>
            </tr>
            <tr>
              <th>Maintenance Schedule</th>
              <td>Up to date</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="price-comparison_sign-up tds-container-fluid">
        <div>
          <TdsButton
            variant="secondary"
            fullbleed={true}
            text="How do I improve my price?"
          ></TdsButton>
        </div>
      </div>
    </div>
  );
}
