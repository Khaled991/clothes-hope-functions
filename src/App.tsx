import { lazy, ReactElement, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layout/header/header';
import { useTranslation } from 'react-i18next';
import 'rc-rate/assets/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { isArabic, isLanguageNotInitilaized } from './utils/locale.utils';

const ContactUs = lazy(() => import('./pages/contact-us/contact-us'));
const Home = lazy(() => import('./pages/home/home'));
const SignInAndSignUpPage = lazy(
  () => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up')
);

const App = (): ReactElement => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const changeLanguage = () => {
    const newLanguage = isArabic() ? 'en-US' : 'ar-EG';
    i18n.changeLanguage(newLanguage);
    handleHtmlDiraction();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('#basic-navbar-nav')?.classList.remove('show');
  }, [pathname]);

  useEffect(() => {
    if (isLanguageNotInitilaized()) i18n.changeLanguage('ar-EG');

    handleHtmlDiraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHtmlDiraction = () => {
    document.querySelector('html')!.style.direction = isArabic()
      ? 'rtl'
      : 'ltr';
  };

  return (
    <div className="root-container">
      <Header changeLanguage={changeLanguage} />
      <div className="root-content__pages">
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInAndSignUpPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* <Route
              path="/x"
              element={
               
              }
            /> */}
          </Routes>
        </Suspense>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
