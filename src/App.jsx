import { Link, Route, Routes } from "react-router-dom";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RootSideMenuLeft from "./components/RootSideMenuLeft/RootSideMenuLeft";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import AuthRoute from "./Routes/AuthRoute";
import RootFooter from "./components/RootFooter/RootFooter";
import PageContainer from "./components/PageContainer/PageContainer";
import HomeRoute from "./Routes/HomeRoute";

function App() {
  return (
    // <RootLayout>
    //   <RootContainer>
    //   <RootHeader />
    //     <PageContainer >
    //       <Routes>
    //         <Route path='/*' element={
    //           <>
    //             <AuthRoute />
    //           </>
    //           }/>
    //       </Routes>
    //     </PageContainer>
    //   <RootFooter />
    //   </RootContainer>
    // </RootLayout>
    <>
       <HomeRoute />
    </>
  );
}

export default App;
