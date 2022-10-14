import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Composition from "./Composition/Composition";
import Page from "./Composition/Page";
import Time from "./Time/Time";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Composition />} />
        <Route path="/survey/:id" element={<Page />} />
        <Route path="*" element={<Navigate replace to="/survey" />} />
        <Route path="/time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
