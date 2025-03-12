import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Page404 from "./Page404";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";

const App: React.FC = () => {
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

export default App;
