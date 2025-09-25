import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ModalContainer } from "./components/modal/ModalContext";

import Home from "./pages/home";
import CityTour from "./pages/citytour";

export default function App() {
  const updateScreenSizeCSS = () => {
    document.documentElement.style.setProperty(
      "--screen-x",
      window.innerWidth.toString()
    );

    document.documentElement.style.setProperty(
      "--screen-y",
      window.innerHeight.toString()
    );
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSizeCSS);
    updateScreenSizeCSS();
  }, []);

  return (
    <ModalContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/citytour" element={<CityTour />} />

          {/*<Route path="/prog">
            <Prog />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/pdf">
            <PDFViewer />
          </Route>
          <Route path="/redirect">
            <RedirectPage />
          </Route> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ModalContainer>
  );
}
