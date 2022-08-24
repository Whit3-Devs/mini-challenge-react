import { TableUsers } from "../components/TableUsers";

export const Home = () => {
  return (
    <div className="container">
      <h2 className="text-secondary">Tabla de usuarios</h2>
      <TableUsers />
    </div>
  );
};
