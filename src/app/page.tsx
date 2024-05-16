"use client";
import "./page.scss";
import { TdsButton } from "@scania/tegel-react";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="start-top">
          <h1 className="tds-headline-01 tds-u-p0 tds-u-m0">Scania</h1>
          <h1 className="tds-headline-01 tds-u-p0 tds-u-m0">SafeGuard</h1>
          <p className="tds-paragraph-02">
            Personalised insurance based on your driving and maintenance.
          </p>
        </div>

        <div className="start-center">
          <p className="tds-detail-02 tds-u-opacity-60 tds-u-pb1 tds-u-m0">
            Enter registration number
          </p>

          <div className="license-plate tds-u-mb2">
            <div className="eu-section">
              <div className="eu-stars"></div>S
            </div>
            <input type="text" maxLength={6} placeholder="ABC 123" />
          </div>
          <TdsButton text="See your price" fullbleed></TdsButton>
        </div>

        <div className="start-bottom">
          <p className="tds-detail-02 tds-u-opacity-60 tds-u-pb1 tds-u-m0">
            Already a customer?
          </p>
          <TdsButton text="Log in" fullbleed variant="secondary"></TdsButton>
        </div>
      </div>
    </section>
  );
}
