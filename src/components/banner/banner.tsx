import { t } from 'i18next';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './banner.scss';

interface IBannerProps {
  changeLanguage: () => void;
}

const Banner = ({ changeLanguage }: IBannerProps): ReactElement => {
  let navigate = useNavigate();

  const bannerNavButton = [
    {
      title:
        localStorage.getItem('i18nextLng') === 'ar-EG'
          ? t('english')
          : t('arabic'),
      onClick: () => changeLanguage(),
    },
    {
      title: t('contact'),
      onClick: () => navigate('/contact-us'),
    },
    {
      title: t('signIn'),
      onClick: () => navigate('/sign-in'),
    },
  ];

  return (
    <Container className="banner">
      <div className="banner__title">
        <span className="banner__text">{t('bannerTitle')}</span>
      </div>
      <nav className="banner__nav">
        {bannerNavButton.map(({ title, onClick }) => (
          <div className="banner__button" onClick={() => onClick()} key={title}>
            <span className="banner__nav-text">{title}</span>
          </div>
        ))}
      </nav>
    </Container>
  );
};

export default Banner;
