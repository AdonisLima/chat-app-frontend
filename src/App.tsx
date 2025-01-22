import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";

import { GlobalStyle } from "./modules/common/presentation/styles/global";
import { ResetStyle } from "./modules/common/presentation/styles/reset";
import { RoutePaths } from "./modules/common/presentation/constants/route-paths";
import { makeLoginPage } from "./modules/auth/main/factories/login-page";

const NotFound = React.lazy(
  () => import("@/modules/common/presentation/pages/not-found")
);

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RoutePaths.LOGIN);
  }, []);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <React.Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={RoutePaths.LOGIN} element={makeLoginPage()} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
