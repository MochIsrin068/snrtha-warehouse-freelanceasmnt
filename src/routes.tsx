import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
