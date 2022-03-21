export interface CartState {
  hidden: boolean;
  cartItems: IItem[];
}

export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
