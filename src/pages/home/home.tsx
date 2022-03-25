import { ReactElement } from 'react';
import ProductsHomeCard from '../../components/prodacts-home-card/products-home-card';
import './home.scss';

const Home = (): ReactElement => {
  return (
    <div className="home-page">
      <ProductsHomeCard
        title="Shoes"
        image="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png"
        numberOfItems={232}
      />
    </div>
  );
};

export default Home;
