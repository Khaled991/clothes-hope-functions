// import { ReactComponent as Star } from '../../assets/icons/star.svg';
// import { ReactComponent as StarHalf } from '../../assets/icons/star-half.svg';
// import './product-card.scss';

// interface ProductCardProps {
//   id: number;
//   name: string;
//   imageUrl: string;
//   rate: number;
//   price: number;
// }

// const ProductCard = ({ id, name, imageUrl, rate, price }: ProductCardProps) => {
//   return (
//     <div>
//       <img src={imageUrl} alt={name} />
//       <h3>{name}</h3>
//       {/* #A8A8A8 #FEBE02 */}

//       {Array.from({ length: rate }).map((_, i) => (
//         <Star key={i} style={{ fill: '#FEBE02' }} width="20" />
//       ))}
//       <StarHalf width="20" />
//       {Array.from({ length: 5 - rate }).map((_, i) => (
//         <Star key={i} style={{ fill: '#A8A8A8' }} width="20" />
//       ))}
//       <h4>{price}$</h4>
//     </div>
//   );
// };

// export default ProductCard;

export {};
