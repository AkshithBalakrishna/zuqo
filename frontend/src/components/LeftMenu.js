import { useState } from "react";
import "./LeftMenu.css";
import { Link } from "react-router-dom";

function LeftMenu() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <section id="menuSection">
      <div>
        <button onClick={showSidebar} id="menuBtn">
          Menu
        </button>
      </div>
      <div>
        <ul className={sidebar ? "show" : ""}>
          <div className="lists">
            <Link to="/userManagement" className="menuLink">
              <li>User Management</li>
            </Link>
            <Link to="/settings" className="menuLink">
              <li>Settings</li>
            </Link>
            <Link to="/reports" className="menuLink">
              <li>Reports</li>
            </Link>
            <Link to="/userCard" className="menuLink">
              <li>User Cards</li>
            </Link>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default LeftMenu;

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// function BasicButtonExample() {
//   return (
//     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//       <Dropdown.Item href="#/action-1">User Management</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Reports</Dropdown.Item>
//     </DropdownButton>
//   );
// }

// export default BasicButtonExample;

// LeftSideMenu.js
