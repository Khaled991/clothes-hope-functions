import { ReactElement } from 'react';
import './home.scss';
import HomeLayout from '../../layout/home-layout/home-layout';
// import { Container } from 'react-bootstrap';
// import ProductCard from '../../components/product-card/product-card';

const Home = (): ReactElement => {
  return (
    <div className="home-page">
      <HomeLayout
        image="https://images.pexels.com/photos/8411031/pexels-photo-8411031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
        title="shop"
        copyrightText="copyright"
      />
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
