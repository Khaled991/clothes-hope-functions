import { t } from 'i18next';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './products-home-card.scss';

export interface IProductsHomeCard {
  id?: number;
  title: string;
  image: string;
  numberOfItems: number;
  cardColor: string;
  path: string;
}

const ProductsHomeCard = ({
  image,
  title,
  numberOfItems,
  cardColor,
  path,
}: IProductsHomeCard): ReactElement => {
  return (
    <NavLink
      to={path}
      className="products-home-card"
      style={{ backgroundColor: cardColor }}
    >
      <img className="products-home-card__image" src={image} alt={title} />
      <span className="products-home-card__title">{title}</span>
      <span className="products-home-card__items-number">
        {numberOfItems === 1 ? t('item') : t('items')} {numberOfItems}
      </span>
    </NavLink>
  );
};

export default ProductsHomeCard;
