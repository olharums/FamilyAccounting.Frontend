import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";

import { Context } from "../ContextedApp";
import { privateRoutes, publicRoutes } from "../routes/routes";
import MainPage from "../pages/MainPage/MainPage";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth
        ? privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

      <Route path="*" element={<MainPage />} />
    </Routes>
  );
});

export default AppRouter;
