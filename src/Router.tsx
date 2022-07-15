import { BrowserRouter, Routes, Route } from "react-router-dom";

import Coins from "./CoinTracker/Coins";
import Coin from "./CoinTracker/Coin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path=":coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
