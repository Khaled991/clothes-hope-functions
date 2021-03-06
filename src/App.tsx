import { lazy, ReactElement, Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/header/header";
import { useTranslation } from "react-i18next";
import "rc-rate/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./components/product-card/product-card";
import {
  isArabic,
  getCurrentLanguage,
  isLanguageNotInitilaized,
} from "./utils/locale.utils";

const ContactUs = lazy(() => import("./pages/contact-us/contact-us"));
const Home = lazy(() => import("./pages/home/home"));
const SignInAndSignUpPage = lazy(
  () => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);

const App = (): ReactElement => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const changeLanguage = () => {
    const newLanguage = isArabic() ? "en-US" : "ar-EG";
    i18n.changeLanguage(newLanguage);
    handleHtmlDiraction();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("#basic-navbar-nav")?.classList.remove("show");
  }, [pathname]);

  useEffect(() => {
    if (isLanguageNotInitilaized()) i18n.changeLanguage("ar-EG");

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
        {/* <Container> */}
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInAndSignUpPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/x"
              element={
                <Container style={{ display: "flex" }}>
                  <ProductCard
                    id={1}
                    name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
                    imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
                    rate={2}
                    price={100}
                  />
                  <ProductCard
                    id={1}
                    name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
                    imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
                    rate={2}
                    price={100}
                  />
                  <ProductCard
                    id={1}
                    name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
                    imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
                    rate={2}
                    price={100}
                  />
                  <ProductCard
                    id={1}
                    name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
                    imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
                    rate={2}
                    price={100}
                  />
                </Container>
              }
            />
          </Routes>
        </Suspense>
        {/* </Container> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
