import React from "react";
import { Link } from "react-router-dom";

// Functional component for the landing page
function LandingPage() {
  return (
    // Container div for the landing page
    <div className="landing-page">
      {/* Link to the "/login" route */}
      <Link className="landing-page-link" to="/login">
        {/* Heading inside the Link */}
        <h1>Get Started</h1>
      </Link>
    </div>
  );
}

// Export the LandingPage component as the default export
export default LandingPage;
