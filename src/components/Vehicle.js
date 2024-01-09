import React from "react";
import styles from "./Vehicle.module.css"; // Import the CSS module
import { Link } from "react-router-dom";

function Vehicle({ vehicle }) {
  // Format the model name for creating links
  const formattedModelName = vehicle.modelName.replace(/\s+/g, "-");

  return (
    <div className={styles["card-container"]}>
      {/* Link to the individual vehicle's details page */}
      <Link to={`/${formattedModelName}-dealers/${vehicle._id}`}>
        {/* Vehicle image */}
        <img
          className={styles["card-image"]}
          src={vehicle.image}
          alt={vehicle.modelName}
        />
      </Link>

      {/* Text content for the vehicle */}
      <div className={styles["card-text-content"]}>
        {/* Link to the individual vehicle's details page */}
        <Link to={`/${formattedModelName}-dealers/${vehicle._id}`}>
          {/* Vehicle model name */}
          <h2>{vehicle.modelName}</h2>
        </Link>

        {/* Brand name */}
        <div>
          <h4 className={styles["brand-name"]}>{vehicle.brand.brandName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
