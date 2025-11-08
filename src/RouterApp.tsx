import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./view/pages/ErrorPage";
import HomePage from "./view/pages/HomePage";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default RouterApp;
