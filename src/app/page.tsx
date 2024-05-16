"use client";
import "./page.scss";
import { TdsButton } from "@scania/tegel-react";

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="tds-headline-01 tds-u-p0 tds-u-m0">Scania</h1>
        <h1 className="tds-headline-01 tds-u-p0 tds-u-m0">SafeGuard</h1>
        <p className="tds-paragraph-02">
          Personalised insurance based on your driving and maintenance.
        </p>

        <div className="license-plate">
          <div className="eu-section">
            <div className="eu-stars"></div>S
          </div>
          <input type="text" maxLength={6} placeholder="ABC 123" />
        </div>
        <TdsButton text="See your price" fullbleed></TdsButton>
      </div>
    </section>
  );
}
