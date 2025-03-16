import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <ExpenseTracker />
      <Footer />
    </div>
  );
}

export default App;
