import { Route, Routes } from "react-router";
import { ROUTES } from "./const";
import HomePage from "../pages/home/HomePage";
import SignUpPage from "../pages/sign-up/signUpPage";
import Login from "../components/login/LoginComponent";

function WeatherRouter() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.signUp} element={<SignUpPage />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </>
  );
}

export default WeatherRouter;
