import "./load-item.scss";

export default function LoadItem({ message = "Gathering driver profile" }) {
  return (
    <div className="tds-u-flex load-item">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="tds-u-width-unset"
      >
        <circle cx="12" cy="12" r="12" fill="#2B70D3" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.872 8.23987C18.0679 8.43453 18.0688 8.75112 17.8742 8.94698C16.1268 10.7052 14.7291 12.1014 13.5479 13.2796C13.3333 13.4938 13.1258 13.7006 12.9248 13.9011C12.019 14.8044 11.2426 15.5786 10.5216 16.3037C10.4279 16.398 10.3005 16.451 10.1676 16.4512C10.0347 16.4513 9.90725 16.3986 9.81332 16.3045L6.13612 12.6233C5.94096 12.4279 5.94114 12.1113 6.13651 11.9162C6.33188 11.721 6.64846 11.7212 6.84362 11.9165L10.1665 15.2431C10.7893 14.6184 11.4594 13.9502 12.2193 13.1924C12.4202 12.992 12.6274 12.7854 12.8417 12.5717C14.0224 11.3939 15.4189 9.99881 17.1649 8.24205C17.3596 8.04619 17.6761 8.04521 17.872 8.23987Z"
          fill="white"
        />
      </svg>
      <p className="tds-detail-02 tds-u-opacity-60">{message}</p>
    </div>
  );
}
