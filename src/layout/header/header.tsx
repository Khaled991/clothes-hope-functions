import { ReactElement, useState, useEffect } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import './header.scss';
import Banner from '../../components/banner/banner';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavDropdownItem from '../../components/nav-dropdownItem/nav-dropdownItem';
// import CustomButton, { ButtonType } from '../../components/button/button';
import i18n from '../../i18next';

interface IHeaderProps {
  changeLanguage: () => void;
}

const Header = ({ changeLanguage }: IHeaderProps): ReactElement => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>('/');

  useEffect(() => {
    document.addEventListener('scroll', function () {
      setCurrentScrollPosition(window.scrollY);
    });
  }, []);

  return (
    <header>
      <Banner changeLanguage={changeLanguage} />
      <Navbar
        expand={false}
        className="navbar-custom"
        fixed="top"
        variant="light"
        style={{
          marginTop:
            currentScrollPosition < 43.5
              ? `${4.35 - window.scrollY / 10}rem`
              : 0,
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#home">
            <NavLink to="/">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                alt="Logo"
                className="logo"
                width="600"
                height="400"
              />
            </NavLink>
          </Navbar.Brand>
          <div className="nav-buttons">
            <div className="nav-buttons__icon-box">
              <Cart className="nav-buttons__icon" />
              <span className="nav-buttons__notification">7</span>
            </div>
            <Search className="nav-buttons__icon" />
          </div>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement={i18n.language === 'ar-EG' ? 'end' : 'start'}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                القائمة
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="offcanvas-body">
              <Nav>
                <NavDropdownItem
                  to="/"
                  active={activeLink === '/'}
                  onClick={() => setActiveLink('/')}
                >
                  {t('home')}
                </NavDropdownItem>
                <NavDropdownItem
                  to="/shop"
                  active={activeLink === '/shop'}
                  onClick={() => setActiveLink('/shop')}
                >
                  {t('shop')}
                </NavDropdownItem>
                <NavDropdownItem
                  to="/about-us"
                  active={activeLink === '/about-us'}
                  onClick={() => setActiveLink('/about-us')}
                >
                  {t('aboutUs')}
                </NavDropdownItem>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
