import { ReactElement } from 'react';
import './home.scss';
import HomeImage from '../../assets/images/home-image.jpg';
import HomeLayout from '../../layout/home-layout/home-layout';
// import { Container } from 'react-bootstrap';
// import ProductCard from '../../components/product-card/product-card';

const Home = (): ReactElement => {
  return (
    <div className="home-page">
      <HomeLayout image={HomeImage} title="shop" copyrightText="copyright" />
      {/* <Container style={{ display: 'flex' }}>
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
      </Container> */}
    </div>
  );
};

export default Home;
