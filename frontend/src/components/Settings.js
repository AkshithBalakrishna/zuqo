import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

function Settings() {
  return (
    <div id="settingsDiv">
      <h2>This is Settings Page</h2>
      <h3>Go back to Reports page for user reports</h3>
      <Link to={"/"}>
        <button id="settingsBtn">Back</button>
      </Link>
    </div>
  );
}

export default Settings;
