import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Page from "./Components/Page";
import Empty from "./Components/Empty";
import Footer from "./Components/Footer";

function App() {
      const random = Math.floor(Math.random() * 125 + 1);
      const [input, setInput] = useState();
      const [location, setLocation] = useState();
      let total;
      let URL = `https://rickandmortyapi.com/api/location/${input ? input : random}`;

      useEffect(() => {
            axios.get(URL)
                  .then((res) => {
                        setLocation(res.data);
                        total = location?.residents.length / 8;
                  })
                  .catch((error) => console.log(error));
      }, [input]);

      const onSubmit = (e) => {
            e.preventDefault();
            setInput(e.target.text.value);
      };
      const onChange = (e) => {
            e.preventDefault(e);
            console.log(e.target.text);
      };
      const pagination = () => {};
      for (let i = 1; i <= total; i++) {
            return <Page number={i} />;
      }
      return (
            <div className="App">
                  <Header />
                  <form onSubmit={onSubmit} className="form" onChange={onChange}>
                        <input type="text" name="text" placeholder="Location ID" />
                        <button>Search</button>
                  </form>
                  <div className="location">
                        <h2>
                              {location?.name} #{location?.id}
                        </h2>
                        <div className="location_info">
                              <span>
                                    Type:<h3>{location?.type}</h3>
                              </span>
                              <span>
                                    Dimension:<h3>{location?.dimension}</h3>
                              </span>
                              <span>
                                    Populations:<h3>{location?.residents.length}</h3>
                              </span>
                        </div>
                  </div>
                  {location?.residents.length == 0 ? (
                        <Empty />
                  ) : (
                        <div className="gallery">
                              {location?.residents.map((item) => {
                                    return <Card key={item} URL={item} />;
                              })}
                        </div>
                  )}
                  <Footer />
            </div>
      );
}

export default App;
