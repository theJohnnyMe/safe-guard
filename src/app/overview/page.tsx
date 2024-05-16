"use client";
import { TdsButton } from "@scania/tegel-react";
import "./page.scss";

export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__price tds-container-fluid">
        <p className="overview__price-text tds-detail-01 tds-u-opacity-60">
          Your price
        </p>
        <h1 className="overview__price-headline tds-headline-01">
          1100{" "}
          <span className="overview__price-headline-kronor tds-detail-05">
            kr/mo
          </span>
        </h1>
        <TdsButton size="lg" fullbleed={true} text="Sign up!"></TdsButton>
      </div>

      <div className="overview__your-info tds-container-fluid">
        <div>
          <h2 className="overview__your-info_headline tds-headline-05">
            Your information
            <span>
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3.63513V6H21V3.63424C18.2722 2.42549 14.9436 2 13 2C11.2151 2 7.74475 2.42677 5 3.63513ZM23 6V3C23 2.62123 22.786 2.27496 22.4472 2.10557C19.2642 0.514066 15.2709 0 13 0C10.9071 0 6.73835 0.512792 3.55279 2.10557C3.214 2.27496 3 2.62123 3 3V6H1C0.447715 6 0 6.44772 0 7V12.5C0 12.951 0.301821 13.3461 0.736883 13.4648L3 14.082V27C3 27.5523 3.44772 28 4 28H7C7.37877 28 7.72504 27.786 7.89443 27.4472L8.61803 26H17.382L18.1056 27.4472C18.275 27.786 18.6212 28 19 28H22C22.5523 28 23 27.5523 23 27V14.082L25.2631 13.4648C25.6982 13.3461 26 12.951 26 12.5V7C26 6.44772 25.5523 6 25 6H23ZM21 8H5V12.5544L6.76312 13.0352C7.11835 13.1321 7.3916 13.4164 7.47439 13.7751L8.82593 19.6318C9.83105 19.7952 11.4741 20 13 20C14.5259 20 16.1689 19.7952 17.1741 19.6318L18.5256 13.7751C18.6084 13.4164 18.8817 13.1321 19.2369 13.0352L21 12.5544V8ZM23 12.0089V8H24V11.7362L23 12.0089ZM21 14.6274L20.3399 14.8074L18.9744 20.7249C18.886 21.1078 18.5815 21.4035 18.1961 21.4806C17.3226 21.6553 15.0867 22 13 22C10.9133 22 8.67744 21.6553 7.80388 21.4806C7.41849 21.4035 7.11398 21.1078 7.02561 20.7249L5.66005 14.8074L5 14.6274V26H6.38197L7.10557 24.5528C7.27496 24.214 7.62123 24 8 24H18C18.3788 24 18.725 24.214 18.8944 24.5528L19.618 26H21V14.6274ZM3 12.0089V8H2V11.7362L3 12.0089Z"
                  fill="white"
                />
              </svg>
            </span>
          </h2>
        </div>
        <table className="overview_your-info__table tds-u-opacity-60">
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

      <div className="overview__your-extra-info tds-container-fluid">
        <ul className="overview__your-extra-info_list">
          <li>
            <h3>No deductible for personal injury</h3> This always applies with
            our policies. Additionally, you can opt for a SEK 0 deductible for
            property damage in traffic incidents.
          </li>
          <li>
            <h3>Interruption insurance with no deductible</h3> We provide cash
            compensation starting from the first day of interruption, with no
            deductible required.
          </li>
          <li>
            <h3>Choose your desired interruption coverage</h3> With our
            interruption insurance, you can select the daily compensation amount
            that fits your needs.
          </li>
        </ul>
      </div>

      <div className="overview__your-option tds-container-fluid">
        <details>
          <summary>Your options</summary>
          <table>
            <tbody>
              <tr>
                <th>Option</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Whole</td>
                <td>Description of Whole coverage</td>
              </tr>
              <tr>
                <td>Half</td>
                <td>Description of Half coverage</td>
              </tr>
              <tr>
                <td>Traffic</td>
                <td>Description of Traffic coverage</td>
              </tr>
              <tr>
                <td>Traffic - personal injury</td>
                <td>Description of Traffic - personal injury coverage</td>
              </tr>
              <tr>
                <td>Traffic - property damage</td>
                <td>Description of Traffic - property damage coverage</td>
              </tr>
              <tr>
                <td>Theft & damage</td>
                <td>Description of Theft & damage coverage</td>
              </tr>
              <tr>
                <td>Fire</td>
                <td>Description of Fire coverage</td>
              </tr>
              <tr>
                <td>Glass</td>
                <td>Description of Glass coverage</td>
              </tr>
              <tr>
                <td>Recovery & towing</td>
                <td>Description of Recovery & towing coverage</td>
              </tr>
              <tr>
                <td>Legal protection</td>
                <td>Description of Legal protection coverage</td>
              </tr>
              <tr>
                <td>Personal property</td>
                <td>Description of Personal property coverage</td>
              </tr>
              <tr>
                <td>Crisis help</td>
                <td>Description of Crisis help coverage</td>
              </tr>
              <tr>
                <td>Exterior damage</td>
                <td>Description of Exterior damage coverage</td>
              </tr>
              <tr>
                <td>Work interruption</td>
                <td>Description of Work interruption coverage</td>
              </tr>
            </tbody>
          </table>
        </details>
      </div>
    </div>
  );
}
