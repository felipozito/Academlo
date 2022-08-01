import React, { useContext } from "react";
import { DataContext } from "../Context/NoteContext";

const Card = ({ note, edit }) => {
      const erase = () => {
            note.filter;
      };

      return (
            <div>
                  <h2>
                        {note.name} {note.surname}
                  </h2>
                  <p>Para el: {note.date}</p>
                  <button onClick={erase}>Delete</button>
                  <button onClick={erase}>Edit</button>
            </div>
      );
};

export default Card;
