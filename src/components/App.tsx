import Quiz from "./quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Rezept from "./rezept";

function App() {
  return (
    <Router>
      <a className="bg-[#0a531d] w-full block text-3xl p-[16px]" href="/">
        Gletschergras.de
      </a>
      <div className="flex flex-wrap justify-center">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rezept" Component={Rezept} />
          <Route path="/quiz" Component={Quiz} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
