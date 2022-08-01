import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import Loader from "./Components/Loader";

function App() {
      const [coord, setCoord] = useState();
      const [loader, setLoader] = useState(true);
      useEffect(() => {
            const read = (position) => {
                  const coordinates = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                  };
                  setCoord(coordinates);
            };
            navigator.geolocation.getCurrentPosition(read);
      }, []);
      console.log(loader);
      return (
            <div className="App">
                  {loader ? <Loader /> : ""}
                  <Card latitude={coord?.lat} longitude={coord?.lon} setLoader={setLoader} />
            </div>
      );
}

export default App;
