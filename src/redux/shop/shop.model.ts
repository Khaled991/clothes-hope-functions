export interface ShopState {
  collections: ICollections;
}

export interface ICollections {
  hats: ICollectionDetails;
  sneakers: ICollectionDetails;
  jackets: ICollectionDetails;
  womens: ICollectionDetails;
  mens: ICollectionDetails;
}

export interface ICollectionDetails {
  id: number;
  title: string;
  routeName: string;
  items: ICollectionItem[];
}

export interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
