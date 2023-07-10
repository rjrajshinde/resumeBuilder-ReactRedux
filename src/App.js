import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import BuildResume from "./components/BuildResume";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buildResume" element={<BuildResume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
