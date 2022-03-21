import { ICollectionItem } from "../shop/shop.model";

export interface CartState {
  hidden: boolean;
  cartItems: IItem[];
}

export interface IItem extends ICollectionItem {
  quantity: number;
}
