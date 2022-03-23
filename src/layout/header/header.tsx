import { ReactElement, useState, useEffect } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
// import Logo from '../../assets/img/logo.webp';
import './header.scss';
import Banner from '../../components/banner/banner';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavDropdownItem from '../../components/navDropdownItem/navDropdownItem';
import CustomButton, { ButtonType } from '../../components/button/button';

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
        expand="lg"
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
          <Navbar.Brand href="#home">
            <NavLink to="/">
              <h1>HELLOOOOO</h1>

              {/* <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src={Logo}
                alt="Logo"
                className="logo"
                width="600"
                height="400"
              /> */}
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Nav className="me-auto">
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
                  to="/sign-in"
                  active={activeLink === '/sign-in'}
                  onClick={() => setActiveLink('/sign-in')}
                >
                  {t('signIn')}
                </NavDropdownItem>
              </Nav>
            </motion.div>
            {/* <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <CustomButton type={ButtonType.solid}>Search</CustomButton>
              </Form>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
