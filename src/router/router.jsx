import { Route, Routes } from "react-router";
import { ROUTES } from "./const";
import HomePage from "../pages/home/HomePage";
import SignUpPage from "../pages/sign-up/signUpPage";
import ProfilePage from "../pages/profile/profilePage";
import LoginPage from "../pages/login/LoginPage";


function WeatherRouter() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.signUp} element={<SignUpPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.profile} element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default WeatherRouter;
