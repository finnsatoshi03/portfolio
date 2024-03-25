import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Archives from "./pages/Archives";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={"home"} />} />
          <Route element={<Home />} path="home" />
          <Route element={<Projects />} path="projects" />
          <Route element={<Archives />} path="archives" />
          <Route element={<About />} path="about" />
          <Route element={<Contact />} path="contact" />
        </Route>

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
