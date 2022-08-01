import { useState, useContext } from "react";
import "./App.css";
import Axios from "./Components/Axios";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Password from "./Components/Password";
import { DataContextProvaider } from "./Context/NoteContext";

function App() {
      return (
            <DataContextProvaider>
                  <div className="App">
                        <Form />
                        <Axios />
                  </div>
            </DataContextProvaider>
      );
}

export default App;
