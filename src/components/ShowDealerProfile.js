import React from "react";
import styles from "./Vehicle.module.css";
import { Link } from "react-router-dom";

function ShowDealerProfile({ vehicle }) {
  // Format dealer name for constructing URL
  const FormattedDealerName = vehicle.dealerName.replace(/\s+/g, "-");

  return (
    <div className={styles["dealer-profile-container"]}>
      {/* Left side with dealer image */}
      <div className={styles["left-side"]}>
        <img src={vehicle.image} alt={vehicle.dealerName} />
      </div>

      {/* Right side with dealer information */}
      <div className={`${styles["right-side"]} ${styles["right-side-name"]}`}>
        <p>Name</p>
        <h2>{vehicle.dealerName}</h2>
      </div>

      <div
        className={`${styles["right-side"]} ${styles["right-side-address"]}`}
      >
        <p>Address</p>
        <h2>{vehicle.dealerAddr}</h2>
      </div>

      <div className={`${styles["right-side"]} ${styles["right-side-phone"]}`}>
        <p>Phone</p>
        <h2>{vehicle.dealerPhone}</h2>
      </div>

      <div className={`${styles["right-side"]} ${styles["right-side-email"]}`}>
        <p>Email</p>
        <h2>{vehicle.dealerEmail}</h2>
      </div>

      {/* Link to view deals with the dealer */}
      <Link
        to={`/${FormattedDealerName}-vehicle/${vehicle._id}`}
        className={styles["View-deals"]}
      >
        <h2>View Deals</h2>
      </Link>
    </div>
  );
}

export default ShowDealerProfile;
