"use client";
import { useRouter } from "next/navigation";
import "./page.scss";
import { useState, useEffect } from "react";
import ProgressBar from "../components/progress-bar/progress-bar";
import LoadItem from "../components/load-item/load-item";

export default function Loading() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isActive && timer < 10) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    if (timer === 9) {
      // Check if the timer has reached the end
      clearInterval(interval); // Clear the interval
      router.push("/price-comparison"); // Redirect to the overview page
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Example function to start the timer

  useEffect(() => {
    setIsActive(true);

    return () => setIsActive(false);
  }, []);

  return (
    <section>
      <div className="loading-page">
        <div className="container">
          <div className="loader-container">
            {timer > 2 && <LoadItem message="Driver profile" />}
            {timer > 3 && <LoadItem message="Driver performance" />}
            {timer > 5 && <LoadItem message="Average monthly drive time" />}
            {timer >= 7 && <LoadItem message="Average annual distance" />}
          </div>

          <div className="loader-title-container">
            <div className="loader-title">
              {timer === 0 && (
                <h5 className="tds-headline-05 loader-title tds-u-opacity-0 tds-u-visibility-hidden">
                  Test
                </h5>
              )}
              {timer === 1 && (
                <h5 className="tds-headline-05 loader-title">
                  Connecting to the database
                </h5>
              )}
              {timer === 2 && (
                <h5 className="tds-headline-05 loader-title">
                  Gathering driver profile
                </h5>
              )}
              {timer >= 3 && timer < 5 && (
                <h5 className="tds-headline-05 loader-title">
                  Driver performance
                </h5>
              )}
              {timer >= 5 && timer < 7 && (
                <h5 className="tds-headline-05 loader-title">
                  Average monthly drive time
                </h5>
              )}
              {timer === 7 && (
                <h5 className="tds-headline-05 loader-title">
                  Average annual distance
                </h5>
              )}
              {timer === 8 && (
                <h5 className="tds-headline-05 loader-title">Calculating...</h5>
              )}
            </div>
            <ProgressBar width={timer * 10} />
          </div>
        </div>
      </div>
    </section>
  );
}
