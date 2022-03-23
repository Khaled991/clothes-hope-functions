import { lazy, ReactElement, Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/header/header";
import { useTranslation } from "react-i18next";

const Home = lazy(() => import("./pages/home/home"));
import ProductCard from "./components/product-card/product-card";

const App = (): ReactElement => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const changeLanguage = () => {
    const newLanguage =
      localStorage.getItem("i18nextLng") === "ar-EG" ? "en-US" : "ar-EG";
    i18n.changeLanguage(newLanguage);
    handleHtmlDiraction();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("#basic-navbar-nav")?.classList.remove("show");
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === undefined)
      i18n.changeLanguage("ar-EG");

    handleHtmlDiraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHtmlDiraction = () => {
    document.querySelector("html")!.style.direction =
      i18n.language === "ar-EG" ? "rtl" : "ltr";
  };

  return (
    <div className="root-container">
      <Header changeLanguage={changeLanguage} />
      <div className="root-content__pages">
        <Container>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/"
                element={
                  <ProductCard
                    id={1}
                    name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
                    imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
                    rate={2}
                    price={100}
                  />
                }
              />
            </Routes>
          </Suspense>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
