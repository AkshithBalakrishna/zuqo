import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserManagement.css";

function UserManagement() {
  const [username, setUsername] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      <form
        id="userManagementForm"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:4001/userDetail", {
            username: username,
            userMobile: userMobile,
            userEmail: userEmail,
          });
          setUsername("");
          setUserMobile("");
          setUserEmail("");
        }}
      >
        <input
          className="userManagementInput"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="userManagementInput"
          type="number"
          placeholder="Mobile"
          value={userMobile}
          onChange={(e) => {
            setUserMobile(e.target.value);
          }}
        />
        <input
          className="userManagementInput"
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input type="submit" value="Submit" id="userManagementSubmit" />
      </form>
      <Link to={"/"}>
        <button id="userManagementBtn">Back</button>
      </Link>
    </>
  );
}

export default UserManagement;
