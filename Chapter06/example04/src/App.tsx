import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Home = React.lazy(() => import("./Home"));
const Video = React.lazy(() => import("./Video"));
const Audio = React.lazy(() => import("./Audio"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="video" element={<Video />} />
        <Route path="audio" element={<Audio />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
