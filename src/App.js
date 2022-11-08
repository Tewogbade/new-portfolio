import "./App.css";
import Content from "./home/content/Content";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Layout />}>
              <Route index element={<Content />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
