"use client";
import { TdsButton } from "@scania/tegel-react";
import { useRouter } from "next/navigation";
import "./page.scss";

export default function PriceComparison() {
  const router = useRouter();
  return (
    <div className="price-comparison">
      <div className="price-comparison__price tds-container-fluid">
        <p className="price-comparison__price-text tds-detail-02 tds-u-opacity-60">
          Your price
        </p>
        <h1 className="price-comparison__price-headline tds-headline-01">
          1160{" "}
          <span className="price-comparison__price-headline-kronor tds-headline-05">
            kr/mo
          </span>
        </h1>
        <TdsButton
          className="tds-u-pb2"
          size="lg"
          fullbleed={true}
          text="Sign up!"
          onClick={() => router.push("/overview")}
        ></TdsButton>
        <button className="secondary-button">See my information</button>
      </div>

      <div className="price-comparison__your-info  price-comparison__your-extra-info tds-container-fluid">
        <div>
          <h2 className="price-comparison__your-info_headline tds-headline-05">
            Compare rates
          </h2>
          <p className="tds-detail-05 tds-u-textalign-end">Price per month</p>
        </div>
        <table className="price-comparison_your-info__table tds-u-opacity-60">
          <tbody>
            <tr>
              <th>
                <b>Scania SafeGuard</b>
              </th>
              <td>
                <b>1160 kr</b>
              </td>
            </tr>
            <tr>
              <th>Länsförsäkringar</th>
              <td>1480 kr</td>
            </tr>
            <tr>
              <th>Folksam</th>
              <td>1720 kr</td>
            </tr>
            <tr>
              <th>Trygg-Hansa</th>
              <td>1390 kr</td>
            </tr>
            <tr>
              <th>Svedea</th>
              <td>1554 kr</td>
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
