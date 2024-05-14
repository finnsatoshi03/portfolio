import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "./layout/AppLayout";
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./features/projects/Projects"));
const Archives = lazy(() => import("./pages/Archives"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
import Loader from "./components/Loader";

import { ProjectProvider } from "./contexts/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
