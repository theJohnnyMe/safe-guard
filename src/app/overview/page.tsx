"use client";
import { TdsButton } from "@scania/tegel-react";
import "./page.scss";

export default function Overview() {
  return (
    <div className="overview">
      <div className="tds-container-fluid">
        <div className="overview__price">
          <p className="overview__price-text tds-detail-01">Your price</p>
          <h1 className="overview__price-headline tds-headline-01">
            1100 <span>kr/mo</span>
          </h1>
          <TdsButton size="lg" fullbleed={true} text="Sign up!"></TdsButton>
        </div>

        <div className="overview__your-info">
          <table>
            <tbody>
              <tr>
                <td>Registration number</td>
                <td>EKY 055</td>
              </tr>
              <tr>
                <td>Driving performance score</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Driver</td>
                <td>42</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overview__your-extra-info">
          <div>
            No deductible for personal injury This always applies with our
            policies. Additionally, you can opt for a SEK 0 deductible for
            property damage in traffic incidents.
          </div>
          <div>
            Interruption insurance with no deductible We provide cash
            compensation starting from the first day of interruption, with no
            deductible required.
          </div>
        </div>
      </div>
    </div>
  );
}
