import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";
import "./Reports.css";

function Reports() {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4001/userList").then((res) => {
      setUserList(res.data);
    });
  }, []);

  const filteredUsers = userList.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const editUser = (user) => {
    setEditingUser(user);
  };

  function deleteUser(userId) {
    axios.delete(`http://localhost:4001/userList/${userId}`).then(() => {
      setUserList((prevUserList) =>
        prevUserList.filter((user) => user._id !== userId)
      );
    });
  }

  return (
    <div>
      <h1 className="reportsHeading">This is Reports</h1>
      <h2 className="reportsHeading">User List</h2>
      <input
        id="reportsSearch"
        type="text"
        placeholder="Search by username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table id="reportsTable">
        <thead>
          <tr id="reportsTr">
            <th className="reportsTh">SL No.</th>
            <th className="reportsTh">Username</th>
            <th className="reportsTh">Mobile</th>
            <th className="reportsTh">Email</th>
            <th className="reportsTh">Edit</th>
            <th className="reportsTh">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td className="reportsTd">{index + 1}</td>
              <td className="reportsTd">{user.username}</td>
              <td className="reportsTd">{user.userMobile}</td>
              <td className="reportsTd">{user.userEmail}</td>
              <td className="reportsTd">
                <button className="reportsbtn" onClick={() => editUser(user)}>
                  Edit
                </button>
              </td>
              <td className="reportsTd">
                <button
                  className="reportsbtn"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/"}>
        <button className="reportsBackBtn">Back</button>
      </Link>
      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <Update user={editingUser} />
        </div>
      )}
    </div>
  );
}

export default Reports;
