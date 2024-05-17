"use client";
import { useRouter } from "next/navigation";
import "./page.scss";
import { TdsButton } from "@scania/tegel-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [trucks, setTrucks] = useState([]);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.toLowerCase();
    value = value.replace(/\s+/g, ""); // Remove existing spaces
    value = value.match(/.{1,3}/g)?.join(" ") ?? ""; // Insert space after every 3 characters
    setInputValue(value.toUpperCase()); // Convert to uppercase and set the value

    trucks.find((truck: any) => {
      const cleanedValue = value.replace(/\s+/g, "");
      if (truck.registrationNumber.toLowerCase() === cleanedValue) {
        console.log(truck);
        sessionStorage.setItem("SelectedTruck", JSON.stringify(truck));
      }
    });
  };

  useEffect(() => {
    async function fetchTrucks() {
      try {
        const response = await fetch("/data/data.json");
        // const response = await fetch("/data/data.json");
        console.log("TRUCKS");
        const data = await response.json();
        setTrucks(data);
      } catch (error) {
        console.error("Error fetching trucks:", error);
      }
    }

    fetchTrucks();
  }, []);

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
              <svg
                width="30"
                height="56"
                viewBox="0 0 30 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="56" fill="#2B70D3" />
                <path
                  d="M15.232 46.24C13.6533 46.24 12.48 45.8933 11.712 45.2C10.944 44.496 10.56 43.5573 10.56 42.384H12.88C12.9013 43.024 13.1147 43.5413 13.52 43.936C13.9253 44.3307 14.5173 44.528 15.296 44.528C15.936 44.528 16.432 44.3947 16.784 44.128C17.1467 43.8613 17.328 43.488 17.328 43.008V42.848C17.328 42.464 17.2053 42.1653 16.96 41.952C16.7253 41.728 16.3467 41.5413 15.824 41.392L13.728 40.8C12.672 40.4907 11.9147 40.1067 11.456 39.648C10.9973 39.1893 10.768 38.5387 10.768 37.696C10.768 37.0453 10.9333 36.4747 11.264 35.984C11.5947 35.4827 12.0693 35.0933 12.688 34.816C13.3173 34.5387 14.0587 34.4 14.912 34.4C15.9147 34.4 16.7413 34.5547 17.392 34.864C18.0533 35.1627 18.5387 35.5733 18.848 36.096C19.168 36.608 19.3333 37.1787 19.344 37.808H17.024C16.9813 37.3173 16.7733 36.912 16.4 36.592C16.0373 36.272 15.5147 36.112 14.832 36.112C14.2773 36.112 13.84 36.2453 13.52 36.512C13.2 36.768 13.04 37.088 13.04 37.472V37.632C13.04 37.9733 13.1573 38.2453 13.392 38.448C13.6267 38.6507 13.9893 38.8213 14.48 38.96L16.464 39.52C17.5733 39.84 18.3733 40.24 18.864 40.72C19.3547 41.2 19.6 41.8933 19.6 42.8C19.6 43.8667 19.216 44.7093 18.448 45.328C17.6907 45.936 16.6187 46.24 15.232 46.24Z"
                  fill="white"
                />
                <path
                  d="M14.6957 9.99788L15.035 9L15.3743 9.99788H16.4725L15.5841 10.6146L15.9234 11.6125L15.035 10.9958L14.1466 11.6125L14.4859 10.6146L13.5975 9.99788H14.6957Z"
                  fill="#F1C21B"
                />
                <path
                  d="M19.0384 10.9696L19.3777 9.97169L19.7171 10.9696H20.8153L19.9268 11.5863L20.2662 12.5842L19.3777 11.9674L18.4893 12.5842L18.8286 11.5863L17.9402 10.9696H19.0384Z"
                  fill="#F1C21B"
                />
                <path
                  d="M21.5835 15.5731L22.4719 14.9564L23.3604 15.5731L23.021 14.5753L23.9095 13.9585H22.8113L22.4719 12.9607L22.1326 13.9585H21.0345L21.9229 14.5753L21.5835 15.5731Z"
                  fill="#F1C21B"
                />
                <path
                  d="M23.9018 18.0771H25L24.1116 18.6938L24.4509 19.6917L23.5625 19.075L22.674 19.6917L23.0134 18.6938L22.125 18.0771H23.2231L23.5625 17.0792L23.9018 18.0771Z"
                  fill="#F1C21B"
                />
                <path
                  d="M22.8113 22.1362L22.4719 21.1383L22.1326 22.1362H21.0345L21.9229 22.7529L21.5835 23.7508L22.4719 23.1341L23.3604 23.7508L23.021 22.7529L23.9095 22.1362H22.8113Z"
                  fill="#F1C21B"
                />
                <path
                  d="M19.3777 24.1642L19.7171 25.1621H20.8153L19.9268 25.7788L20.2662 26.7767L19.3777 26.1599L18.4893 26.7767L18.8286 25.7788L17.9402 25.1621H19.0384L19.3777 24.1642Z"
                  fill="#F1C21B"
                />
                <path
                  d="M15.3743 26.2089L15.035 25.211L14.6957 26.2089H13.5975L14.4859 26.8256L14.1466 27.8235L15.035 27.2068L15.9234 27.8235L15.5841 26.8256L16.4725 26.2089H15.3743Z"
                  fill="#F1C21B"
                />
                <path
                  d="M10.7447 24.1642L11.084 25.1621H12.1822L11.2937 25.7788L11.6331 26.7767L10.7447 26.1599L9.85625 26.7767L10.1956 25.7788L9.30715 25.1621H10.4053L10.7447 24.1642Z"
                  fill="#F1C21B"
                />
                <path
                  d="M7.91891 22.1362L7.57956 21.1383L7.2402 22.1362H6.14204L7.03049 22.7529L6.69114 23.7508L7.57956 23.1341L8.46798 23.7508L8.12862 22.7529L9.01708 22.1362H7.91891Z"
                  fill="#F1C21B"
                />
                <path
                  d="M7.32597 19.6917L6.43752 19.075L5.54907 19.6917L5.88842 18.6938L5 18.0771H6.09816L6.43752 17.0792L6.77687 18.0771H7.87504L6.98662 18.6938L7.32597 19.6917Z"
                  fill="#F1C21B"
                />
                <path
                  d="M7.57956 12.9607L7.2402 13.9585H6.14204L7.03049 14.5753L6.69114 15.5731L7.57956 14.9564L8.46798 15.5731L8.12862 14.5753L9.01708 13.9585H7.91891L7.57956 12.9607Z"
                  fill="#F1C21B"
                />
                <path
                  d="M10.4053 10.9696L10.7447 9.97169L11.084 10.9696H12.1822L11.2937 11.5863L11.6331 12.5842L10.7447 11.9674L9.85625 12.5842L10.1956 11.5863L9.30715 10.9696H10.4053Z"
                  fill="#F1C21B"
                />
              </svg>
            </div>

            <input
              type="text"
              maxLength={7}
              placeholder="ABC 123"
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <TdsButton
            text="See your price"
            fullbleed
            disabled={!inputValue || inputValue.length !== 7}
            onClick={() => router.push("/loading")}
          ></TdsButton>
        </div>

        <div className="start-bottom">
          <p className="tds-detail-02 tds-u-opacity-60 tds-u-pb1 tds-u-m0">
            Already a customer?
          </p>
          <button className="secondary-button">Log in</button>
        </div>
      </div>
    </section>
  );
}
