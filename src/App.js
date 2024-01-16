import { useContext } from "react";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Context/AuthContextProvider";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
import MobileOptions from "./Components/MobileOptions";
import StickyTopBar from "./Components/StickyTopBar";

function App() {
  let { showForm, setShowForm, showForm2, setShowForm2 } =
    useContext(AuthContext);
  return (
    <>
      <div className="App">
        <StickyTopBar/>
        <Navbar />
        <Body />
        {/* <Footer /> */}
      </div>
      {showForm ? <Form /> : null}
      {showForm2 ? <Form2 /> : null}
      <MobileOptions />
    </>
  );
}

export default App;
