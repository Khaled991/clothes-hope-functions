import { t } from 'i18next';
import { ReactElement } from 'react';
import './banner.scss';

interface IBannerProps {
  changeLanguage: () => void;
}

const Banner = ({ changeLanguage }: IBannerProps): ReactElement => {
  return (
    <div className="banner">
      <div className="banner__title">
        <span className="banner__text">{'bannerTitle'}</span>
      </div>
      <nav className="banner__nav">
        <div className="banner__button">
          {/* <Icon className="icon" /> */}
          <span className="banner__nav-text">Contact Us</span>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
