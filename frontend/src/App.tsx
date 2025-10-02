import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navtabs from "./components/Navbar/Navtabs";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navtabs />} />
        <Route path="/settings" element={<Navtabs />} />
      </Routes>
    </div>
  );
};

export default App;
