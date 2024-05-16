"use client";
import "./progress-bar.scss";

export default function ProgressBar({ width = 0 }) {
  return (
    <div className="w3-container tds-u-p0">
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className="w3-container w3-blue w3-round-xlarge"
          style={{ height: "5px", width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
