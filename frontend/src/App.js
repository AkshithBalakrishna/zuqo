import LeftMenu from "./components/LeftMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import Settings from "./components/Settings";
import Reports from "./components/Reports";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LeftMenu />} />
            <Route path="/userManagement" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/userCard" element={<UserCard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
