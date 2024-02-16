import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Result from "./components/Result";
import Board from "./components/Board";

function App() {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/Board" element={<Board />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
