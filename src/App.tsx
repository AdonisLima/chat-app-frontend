import { LoginPage } from "./modules/auth/presentation/pages/login";
import { GlobalStyle } from "./modules/common/presentation/styles/global";
import { ResetStyle } from "./modules/common/presentation/styles/reset";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <LoginPage />
    </>
  );
}

export default App;
