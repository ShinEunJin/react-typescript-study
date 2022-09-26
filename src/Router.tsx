import { BrowserRouter, Routes, Route } from "react-router-dom";

import Composition from "./Composition/Composition";
import CompositionForm from "./Composition/CompositionForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Composition />} />
        <Route path="/survey/:id" element={<CompositionForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
