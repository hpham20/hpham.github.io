import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import SkillsPage from './components/SkillsPage'
import ProjectsPage from "./components/ProjectsPage"
import PageNotFound from './components/PageNotFound'
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
