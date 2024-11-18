import { Link, Route, Routes } from "react-router-dom";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RootSideMenuLeft from "./components/RootSideMenuLeft/RootSideMenuLeft";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import AuthRoute from "./Routes/AuthRoute";

function App() {
  return (
    // <RootLayout>
    //   <RootContainer>
    //     <AuthRoute />
    //   </RootContainer>
    // </RootLayout>
    <>
      <h2>hello spring framework</h2>
      <Link to={"/board/save"}>글작성</Link>
      <Link to={"/board/"}>글목록</Link>
    </>
  );
}

export default App;
