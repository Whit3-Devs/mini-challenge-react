import { useReducer } from "react";
import { User } from "../interfaces/userInterface"
import { UserContext } from "./UserContext"
import usersArray from "../db/users.json";
import { userReducer } from "./userReducer";

interface props {
  children: JSX.Element | JSX.Element[]
}

const initialState: User[] = usersArray;


const UserProvider = ({ children } : props) => {

  const [userState, dispatch] = useReducer(userReducer, initialState);

  const addUser = (user: User) => {
    return dispatch({type: 'addUser', payload: user })
  }

  return (
    <UserContext.Provider value={{
      userState,
      addUser
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider