import React, { useContext } from "react";
import { DataContext } from "../Context/NoteContext";

const Form = () => {
      const { note, setNote } = useContext(DataContext);

      const newNote = (e) => {
            e.preventDefault();
            const newNote = {
                  id: e.target.date.value,
                  name: e.target.name.value,
                  surname: e.target.surname.value,
                  date: e.target.date.value,
            };
            setNote([...note, newNote]);
      };
      return (
            <form className="form" onSubmit={newNote}>
                  <label htmlFor="name">
                        Ingresar Nombre:
                        <input type="text" name="name" />
                  </label>
                  <label htmlFor="surname">
                        Ingresar Apellido:
                        <input type="text" name="surname" />
                  </label>
                  <label htmlFor="date">
                        Fecha:
                        <input type="date" name="date" />
                  </label>
                  <button type="submit">Registrar</button>
                  <button type="reset">Limpiar</button>
            </form>
      );
};

export default Form;
