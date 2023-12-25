import { BrowserRouter, Routes, Route } from "react-router-dom";
//PAGE IMPORTS
import Intro from "./User/Pages/Intro/Intro";
import UserHome from "./User/UserHome";
import AdminHome from "./Admin/AdminHome";
import NoPage from "./User/Pages/NoPage";
import TenderCreate from "./User/Pages/TenderCreate/TenderCreate";
////

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/tenderCreate" element={<TenderCreate />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
