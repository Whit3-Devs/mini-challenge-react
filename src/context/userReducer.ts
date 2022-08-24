import { User } from "../interfaces/userInterface";

type UserAction = { type: "addUser"; payload: User };

export const userReducer = (state: User[], action: UserAction): User[]  => {
  switch (action.type) {
    case "addUser":
      return [...state, action.payload];

    default:
      return state;
  }
};
