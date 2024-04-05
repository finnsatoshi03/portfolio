import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Projects from "./features/projects/Projects";
import Archives from "./pages/Archives";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="archives" element={<Archives />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
