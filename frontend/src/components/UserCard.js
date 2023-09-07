import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

function UserCard() {
  const [userCard, setUserCard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/userList").then((res) => {
      setUserCard(res.data);
    });
  }, []);

  return (
    <>
      <header>
        <section id="userCardSection">
          {userCard.map((user) => (
            <div key={user._id} id="userCard">
              <h1>{user.username}</h1>
              <h3>{user.userMobile}</h3>
              <h3>{user.userEmail}</h3>
            </div>
          ))}
        </section>
        <Link to={"/"}>
          <button id="userCardBtn">Back</button>
        </Link>
      </header>
    </>
  );
}

export default UserCard;
