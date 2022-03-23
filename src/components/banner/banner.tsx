import { t } from 'i18next';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Contact } from '../../assets/icons/contact.svg';
import { ReactComponent as Language } from '../../assets/icons/language.svg';
import './banner.scss';

interface IBannerProps {
  changeLanguage: () => void;
}

const Banner = ({ changeLanguage }: IBannerProps): ReactElement => {
  let navigate = useNavigate();

  const bannerNavButton = [
    {
      title: t('contact'),
      Icon: Contact,
      onClick: () => navigate('/contact-us'),
    },
    {
      title:
        localStorage.getItem('i18nextLng') === 'ar-EG'
          ? t('english')
          : t('arabic'),
      Icon: Language,
      onClick: () => changeLanguage(),
    },
  ];

  return (
    <div className="banner">
      <div className="banner__title">
        <span className="banner__text">{'bannerTitle'}</span>
      </div>
      <nav className="banner__nav">
        {bannerNavButton.map(({ Icon, title, onClick }) => (
          <div className="banner__button" onClick={() => onClick()} key={title}>
            <Icon className="icon" />
            <span className="banner__nav-text">{title}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Banner;
