import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Table from "./table/Table";
import Result from "./table/result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/home" element={<Table />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
