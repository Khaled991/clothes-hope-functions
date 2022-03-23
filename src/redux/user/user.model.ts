export interface UserState {
  currentUser: IUser | null;
}
export interface IUser {
  displayName: string;
  email: string;
  createdAt: string;
}
