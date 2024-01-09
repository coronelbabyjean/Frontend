import React from "react";
import styles from "./Vehicle.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function ShowDealerVehicle({ vehicle }) {
  // Function to handle clicking on the "Email Me" button
  const handleContactClick = () => {
    window.location.href = `mailto:${vehicle.dealer.dealerEmail}`;
  };

  return (
    <>
      <div className={styles["card-container"]}>
        {/* Vehicle image */}
        <img
          className={styles["card-image"]}
          src={vehicle.modelInfo.image}
          alt={vehicle.modelInfo.modelName}
        />

        {/* Text content for the vehicle */}
        <div className={styles["card-text-content"]}>
          {/* Vehicle model name and brand with arrow icon */}
          <h2>
            {vehicle.modelInfo.modelName}
            <FaLongArrowAltRight className={styles["arrow"]} />
            <span>{vehicle.brandInfo.brandName}</span>
          </h2>

          {/* Vehicle status and price */}
          <div className={styles["vehicle-status-price"]}>
            <h4 className={styles["status"]}>{vehicle.vehicleStatus}</h4>
            <h4> ₱ {vehicle.price}</h4>
          </div>

          {/* Dealer information */}
          <div className={styles["dealer-info"]}>
            <h4>{vehicle.dealerInfo.dealerName}</h4>
            <h4>{vehicle.dealer.dealerAddr}</h4>
            <h4>{vehicle.dealerInfo.dealerPhone}</h4>
          </div>

          {/* "Email Me" button */}
          <div className={styles["center-button"]}>
            <button
              className={styles["contact-me"]}
              onClick={handleContactClick}
            >
              Email Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowDealerVehicle;
