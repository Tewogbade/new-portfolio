import "./App.css";
import Content from "./home/content/Content";
import Footer from "./home/footer/Footer";
import Navbar from "./home/navbar/Navbar";
import Sidecard from "./portfolio/sidecard/Sidecard";
import Resume from "./resume/Resume";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Content />
        <Footer />
        <Navbar />
        <Sidecard />
        <Navbar />
        <Resume />
      </div>
    </>
  );
}

export default App;
