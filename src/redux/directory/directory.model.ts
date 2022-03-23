export interface DirectoryState {
  cartItems: IDirectory[];
}

export interface IDirectory {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
}
