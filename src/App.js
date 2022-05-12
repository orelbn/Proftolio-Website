import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";
import NavigationBar from "./components/NavigationBar.js";
import Footer from "./components/Footer.js";
import Page404 from "./Page404.js";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
