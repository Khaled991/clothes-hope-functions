import Rate from 'rc-rate';
import { t } from 'i18next';

import './product-card.scss';

interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
  rate: number;
  price: number;
}

const ProductCard = ({ name, imageUrl, rate, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img className="product-card--image" src={imageUrl} alt={name} />
      <div className="product-card--name">{name}</div>
      <div className="product-card--price">
        {price.toFixed(2)} {t('currency')}
      </div>
      <Rate value={rate} direction="ltr" allowHalf disabled />
    </div>
  );
};

export default ProductCard;
