import React from "react";
import Card from "./components/Card/Card";
import Profile from "./screens/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <Card></Card>
//     </>
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
