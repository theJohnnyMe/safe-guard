"use client";
import { TdsButton } from "@scania/tegel-react";
import "./page.scss";
import Checkmark from "../components/checkmark";
import Truck from "../components/truck";
import { useEffect, useState } from "react";
import { Truck as TruckInterface } from "../../interface/truck-interface";

export default function Overview() {
  const [truck, setTruck] = useState<TruckInterface | null>(null);

  useEffect(() => {
    const truckSession = sessionStorage.getItem("SelectedTruck");
    if (truckSession) {
      setTruck(JSON.parse(truckSession));
    }
  }, []);

  if (!truck) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  return (
    <div className="overview">
      <div className="overview__price tds-container-fluid">
        <p className="overview__price-text tds-detail-02 tds-u-opacity-60">
          Your price
        </p>
        <h1 className="overview__price-headline tds-headline-01">
          {truck.cost}
          <span className="overview__price-headline-kronor tds-headline-05">
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
              <Truck />
            </span>
          </h2>
        </div>
        <table className="overview_your-info__table tds-u-opacity-60">
          <tbody>
            <tr>
              <th>Registration Number</th>
              <td> {truck.registrationNumber.toUpperCase()}</td>
            </tr>
            <tr>
              <th>Driving Performance Score</th>
              <td> {truck.driverPerformanceGrade}</td>
            </tr>
            <tr>
              <th>Driver Age</th>
              <td>{truck.driverAge}</td>
            </tr>
            <tr>
              <th>Infractions</th>
              <td>{truck.numberOfViolations}</td>
            </tr>
            <tr>
              <th>Average Monthly Drive Time</th>
              <td>{truck.averageMonthlyDriveTime}</td>
            </tr>
            <tr>
              <th>Average Annual Distance</th>
              <td>{truck.annualAverageDistance}</td>
            </tr>
            <tr>
              <th>Maintenance Schedule</th>
              <td>{truck.regularlyServiced ? "Up to date" : "Delayed"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overview__your-extra-info tds-container-fluid">
        <ul className="overview__your-extra-info_list">
          <li>
            <h6 className="tds-headline-06">
              No deductible for personal injury
            </h6>
            This always applies with our policies. Additionally, you can opt for
            a SEK 0 deductible for property damage in traffic incidents.
          </li>
          <li>
            <h6 className="tds-headline-06">
              Interruption insurance with no deductible
            </h6>
            We provide cash compensation starting from the first day of
            interruption, with no deductible required.
          </li>
          <li>
            <h6 className="tds-headline-06">
              Choose your desired interruption coverage
            </h6>
            With our interruption insurance, you can select the daily
            compensation amount that fits your needs.
          </li>
        </ul>
      </div>

      <div className="overview__your-option tds-container-fluid">
        <details className="overview__your-option_detail">
          <summary className="overview__your-option_detail_summary tds-headline-05">
            Your options
          </summary>
          <table className="overview__your-option_table tds-detail-05">
            <thead>
              <tr>
                <th></th>
                <th>Whole</th>
                <th>Half</th>
                <th>Traffic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Traffic - personal injury</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
              </tr>
              <tr>
                <td>Traffic - property damage</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
              </tr>
              <tr>
                <td>Theft & damage</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Fire</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Glass</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Recovery & towing</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Legal protection</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Personal property</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Crisis help</td>
                <td>
                  <Checkmark />
                </td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Exterior damage</td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Work interruption</td>
                <td>
                  <Checkmark />
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </details>
      </div>

      <div className="overview_sign-up tds-container-fluid">
        <div>
          <TdsButton fullbleed={true} text="Sign up!"></TdsButton>
        </div>
      </div>
    </div>
  );
}
