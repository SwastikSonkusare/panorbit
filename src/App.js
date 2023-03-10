import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./screens/Profile/Profile";
import Card from "./components/Card/Card";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<ComingSoon />} />
        <Route path="/gallery" element={<ComingSoon />} />
        <Route path="/todo" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
