import { useState } from "react";
import axios from "axios";
import "./Update.css";

function Update({ user }) {
  const [username, setUsername] = useState(user.username);
  const [userMobile, setUserMobile] = useState(user.userMobile);
  const [userEmail, setUserEmail] = useState(user.userEmail);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserData = {
      username,
      userMobile,
      userEmail,
    };

    axios
      .put(`http://localhost:4001/userList/${user._id}`, updatedUserData)
      .then((res) => res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="updateLabel">
          Username:
          <input
            className="updateInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="updateLabel">
          Mobile:
          <input
            className="updateInput"
            type="text"
            value={userMobile}
            onChange={(e) => setUserMobile(e.target.value)}
          />
        </label>
        <br />
        <label className="updateLabel">
          Email:
          <input
            className="updateInput"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <button id="updateBtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Update;
