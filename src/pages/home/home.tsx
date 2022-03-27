import { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsHomeCard from './../../components/products-home-card/products-home-card';
import './home.scss';
import { homeData } from './../../components/products-home-card/products-home-card.data';

const Home = (): ReactElement => {
  return (
    <div className="home-page">
      <Row className="d-flex">
        <Col className="home-cards-container">
          {homeData.map(({ id, ...props }) => (
            <ProductsHomeCard key={id} {...props} />
          ))}

          <ProductsHomeCard
            path="/"
            cardColor="#e2ece9"
            title="Shoes"
            image="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png"
            numberOfItems={1}
          />
          <ProductsHomeCard
            path="/"
            cardColor="#e2ece9"
            title="Shoes"
            image="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png"
            numberOfItems={232}
          />
          <ProductsHomeCard
            path="/"
            cardColor="#e2ece9"
            title="Shoes"
            image="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png"
            numberOfItems={232}
          />
          <ProductsHomeCard
            path="/"
            cardColor="#e2ece9"
            title="Shoes"
            image="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png"
            numberOfItems={232}
          />
        </Col>
        <Col>{/* <div style={{ height: 999 }}></div> */}</Col>
      </Row>
    </div>
  );
};

export default Home;
