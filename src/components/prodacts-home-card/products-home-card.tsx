import { ReactElement } from 'react';
import './products-home-card.scss';

interface IProductsHomeCard {
  title: string;
  image: string;
  numberOfItems: number;
}

const ProductsHomeCard = ({
  image,
  title,
  numberOfItems,
}: IProductsHomeCard): ReactElement => {
  return (
    <div className="prodacts-home-card">
      <img className="prodacts-home-card__image" src={image} alt={title} />
      <span className="prodacts-home-card__title">{title}</span>
      <span className="prodacts-home-card__items-number">
        {numberOfItems} Items
      </span>
    </div>
  );
};

export default ProductsHomeCard;
