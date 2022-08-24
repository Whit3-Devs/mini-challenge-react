import { User } from "../interfaces/userInterface";
import { UserContext } from '../context/UserContext';
import { useContext } from "react";

export const TableUsers = () => {

  const { userState } = useContext(UserContext);


  const userRow = ({ nombre, edad, carrera, hobbie }: User, index: number) => {
    return (
      <tr key={index}>
        <td>{nombre} </td>
        <td>{edad}</td>
        <td>{carrera}</td>
        <td>{hobbie}</td>
      </tr>
    );
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbies</th>
        </tr>
      </thead>
      <tbody>{userState.map(userRow)}</tbody>
    </table>
  );
};
