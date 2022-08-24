import { createContext } from "react";
import { User } from '../interfaces/userInterface';

export type UserContextProps = {
  userState: User[],
  addUser: ( user: User ) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);