import { ReactElement } from 'react';
import './home-layout.scss';
import { ReactComponent as Facebook } from '../../assets/icons/logo-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/logo-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/logo-instagram.svg';
import Mask from '../../assets/images/mask.jpg';
import { t } from 'i18next';
import i18n from '../../i18next';
import ProductsHomeCard from '../../components/products-home-card/products-home-card';
import { homeData } from '../../components/products-home-card/products-home-card.data';
// import { Carousel } from 'react-bootstrap';
// import video from './Videos.video1.mp4';

interface IHomeLayoutProps {
  image: string;
  title: string;
  copyrightText: string;
}

const HomeLayout = ({
  image,
  title,
  copyrightText,
}: IHomeLayoutProps): ReactElement => {
  const copyrightDirection = i18n.language === 'ar-EG' ? 'right' : 'left';
  const socialDirection = i18n.language === 'ar-EG' ? 'left' : 'right';
  return (
    <section className="home-layout">
      {/* <source
        className="home-image"
        src="assets/videos/video.mp4"
        type="video/mp4"
      /> */}
      {/* <video className="home-image" autoPlay loop muted playsInline>
      </video> */}
      <img src={image} className="home-image" alt="homeImage" />
      <img src={Mask} className="mask" alt="mask" />
      <h2 className="home-layout__title">{t(title)}</h2>
      <p
        style={{ [copyrightDirection]: '10rem' }}
        className="home-layout__copyright-text"
      >
        {t(copyrightText)}
      </p>
      <ul style={{ [socialDirection]: '10rem' }} className="home-layout__sci">
        <li>
          <a href="#s">
            <Facebook className="social-icons" />
          </a>
        </li>
        <li>
          <a href="#s">
            <Instagram className="social-icons" />
          </a>
        </li>
        <li>
          <a href="#s">
            <Twitter className="social-icons" />
          </a>
        </li>
      </ul>
      <div className="card-slider">
        {homeData.map(({ id, ...props }) => (
          <ProductsHomeCard key={id} {...props} />
        ))}

        {/* <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
    </section>
  );
};

export default HomeLayout;
