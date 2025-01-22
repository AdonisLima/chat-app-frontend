import React from "react";

const LoginPage = React.lazy(
  () => import("@/modules/auth/presentation/pages/login")
);

export function makeLoginPage() {
  return <LoginPage />;
}
