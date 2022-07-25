import { useState, useEffect } from "react";
import "./App.css";
import phrase from "../Utils/Phrase.js";
import arrayColors from "../Utils/colors";
import Card from "./Components/Card";

function App() {
      const getElement = (array) => {
            const index = Math.floor(Math.random() * array.length);
            return array[index];
      };
      const getRandom = () => {
            const quote = getElement(phrase);
            const color = getElement(arrayColors);
            setQuotes(quote);
            setColors(color);
      };

      const quote = getElement(phrase);
      const color = getElement(arrayColors);

      const [quotes, setQuotes] = useState(quote);
      const [colors, setColors] = useState(color);

      const objectStyle = {
            backgroundColor: colors,
      };
      return (
            <div className="App" style={objectStyle}>
                  <Card info={quotes} color={colors} getRandom={getRandom} />
            </div>
      );
}

export default App;
