import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Footer from "./assets/Footer/Footer";
import Header from "./Header/Header";

function App() {
   const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      {
        navigation.state === "loading" ?
        <p className="loading loading-spinner loading-lg flex mx-auto my-4"></p>:
          <Outlet></Outlet>
      }
      <Footer></Footer>
    </>
  );
}


export default App;
