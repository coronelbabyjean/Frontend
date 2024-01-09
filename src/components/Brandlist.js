import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styles from "../components/Vehicle.module.css";
import Searchbar from "./searchbar";
import Loader from "./loader";

function Brandlist() {
  // State to store the list of brands
  const [brand, setBrand] = useState([]);
  
  // State to track the currently active brand
  const [activeBrand, setActiveBrand] = useState(null);
  
  // Get the current location using react-router-dom
  const location = useLocation();
  
  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch the list of brands from the API
  const getBrand = async () => {
    try {
      // Set loading to true before making the API request
      setIsLoading(true);
      
      // Fetch brand data from the API
      const response = await axios.get("http://localhost:8000/api/brand");
      
      // Set the fetched data to the state
      setBrand(response.data);
      
      // Set loading to false after successful data retrieval
      setIsLoading(false);
    } catch (error) {
      // Log any errors and set loading to false
      console.log(error);
      setIsLoading(false);
    }
  };

  // Fetch brand data on component mount
  useEffect(() => {
    getBrand();
  }, []);

  // Update activeBrand when the location changes
  useEffect(() => {
    // Extract the brand ID from the URL
    const brandIdFromUrl = location.pathname.split("/").pop();
    
    // Set the active brand based on the URL
    setActiveBrand(brandIdFromUrl);
  }, [location]);

  // Handle brand click event
  const handleBrandClick = (brandId) => {
    // Update the activeBrand state when a brand is clicked
    setActiveBrand(brandId);
  };

  return (
    <>
      {/* Conditional rendering based on loading status */}
      {isLoading ? (
        // Display a loader if data is still being fetched
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      ) : (
        // If not loading, display the brand list
        <div>
          {/* Include the search bar component */}
          <Searchbar />
          
          {/* Container for the list of brands */}
          <div className={styles["brand-list-container"]}>
            {/* Map through the brands and create links */}
            {brand.map((singleBrand) => (
              <Link
                // Link to the specific brand using its ID in the URL
                to={`/vehicle-By-Brand/${singleBrand._id}`}
                key={singleBrand._id}
                className={`${styles["brand-link"]} ${
                  // Apply a style for the active brand
                  activeBrand === singleBrand._id ? styles["active-brand"] : ""
                }`}
                // Handle brand click to update the activeBrand state
                onClick={() => handleBrandClick(singleBrand._id)}
              >
                {/* Display the brand name */}
                <h2 className={styles["brand-list-text"]}>
                  {singleBrand.brandName}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Brandlist;
