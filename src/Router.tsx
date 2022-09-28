import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Composition from "./Composition/Composition";
import CompositionForm from "./Composition/CompositionForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Composition />} />
        <Route path="/survey/:id" element={<CompositionForm />} />
        <Route path="*" element={<Navigate replace to="/survey" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
