import { useForm } from "../hooks/useForm";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
export const Form = () => {
  const { addUser } = useContext(UserContext);

  const { formulario, onChangeForm, nombre, edad, carrera, hobbie } = useForm({
    nombre: "",
    edad: 0,
    carrera: "",
    hobbie: "",
  });

  const createUser = () => {
    console.log(formulario);

    if (
      nombre.length > 3 &&
      edad > 17 &&
      carrera.length > 3 &&
      hobbie.length > 3
    )
      addUser(formulario);
    else alert("Ingrese datos validos en todos los campos");
  };

  return (
    <>
      <div className="container">
        <h2 className="text-secondary">Formulario</h2>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={({ target }) => onChangeForm(target.value, "nombre")}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Edad</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control mt-2 mb-2"
              placeholder="Ingrese su edad"
              value={edad}
              onChange={({ target }) => onChangeForm(target.value, "edad")}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Carrera</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Ingrese su carrera"
              value={carrera}
              onChange={({ target }) => onChangeForm(target.value, "carrera")}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Hobbies</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Ingrese su hobbie"
              value={hobbie}
              onChange={({ target }) => onChangeForm(target.value, "hobbie")}
            />
          </div>
        </div>

        <button className="btn btn-primary btn-lg" onClick={createUser}>
          Crear usuario
        </button>
      </div>

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
