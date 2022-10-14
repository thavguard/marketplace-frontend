import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { Loader } from "../Loader/Loader";

type Props = {};

export const AppRouter = (props: Props) => {
  const { isAuth, isInitDone } = useAppSelector((state) => state.auth);

  if (!isInitDone) return null;

  const Profile = React.lazy(() =>
    import("../../../pages/Profile/Profile").then((module) => ({
      default: module.Profile,
    }))
  );

  const HomePage = React.lazy(() =>
    import("../../../pages/Home/HomePage").then((module) => ({
      default: module.HomePage,
    }))
  );

  const Login = React.lazy(() =>
    import("../../../pages/Auth/Login/LoginPage").then((module) => ({
      default: module.Login,
    }))
  );

  const Signup = React.lazy(() =>
    import("../../../pages/Auth/Signup/SignupPage").then((module) => ({
      default: module.Signup,
    }))
  );

  const AddItem = React.lazy(() =>
    import("../../../pages/Profile/AddItem/AddItem").then((module) => ({
      default: module.AdddItem,
    }))
  );

  const ItemPage = React.lazy(() =>
    import("../../../pages/Item/ItemPage").then((module) => ({
      default: module.ItemPage,
    }))
  );

  return !!isAuth ? (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="addItem"
        element={
          <Suspense fallback={<Loader />}>
            <AddItem />
          </Suspense>
        }
      />
      <Route
        path="/item/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ItemPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="registration"
        element={
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/item/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ItemPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
