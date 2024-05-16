"use client";
import "./progress-bar.scss";

export default function ProgressBar({ width = 0 }) {
  return (
    <div className="w3-container tds-u-p0">
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className={`w3-container  w3-round-xlarge progress-bar ${
            width > 0 ? "w3-blue" : ""
          }`}
          style={{ height: "5px", width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
