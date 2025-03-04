import { ToastContainer } from "react-toastify";
import "./App.css";
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <>
      <ToastContainer />
      <BMICalculator />{" "}
    </>
  );
}

export default App;
