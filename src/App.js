import { BrowserRouter, Routes, Route } from "react-router-dom";
//PAGE IMPORTS
import Intro from "./Pages/Intro";
import UserHome from "./Pages/User/UserHome";
import AdminHome from "./Pages/Admin/AdminHome";
import NoPage from "./Pages/NoPage";
////
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
