import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/pages/home";
import UserList from "./admin/users/pages/userlist";
import Login from "./admin/users/pages/login";
import SideBarNav from "./shared/components/sidebarnav";

function App() {
  return (
    <Router>
      <SideBarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
