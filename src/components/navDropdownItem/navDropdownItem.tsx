import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import i18n from './../../i18next';

interface INavDropdownItem {
  active: boolean;
  children: any;
  to: string;
  onClick: () => void;
}

const NavDropdownItem = ({
  active,
  to,
  children,
  onClick,
}: INavDropdownItem) => {
  return (
    <NavDropdown.Item
      as="div"
      className={`${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <NavLink
        to={to}
        className={`${active ? ' selected' : ''}`}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </NavDropdown.Item>
  );
};

export default NavDropdownItem;
