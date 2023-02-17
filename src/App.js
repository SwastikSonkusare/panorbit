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

const Posts = () => {
  return <div>Coming soon</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/posts" exact element={<Posts />} />
        <Route path="/gallery" exact element={<Posts />} />
        <Route path="/todo" exact element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
