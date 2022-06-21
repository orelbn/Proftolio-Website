import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
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
