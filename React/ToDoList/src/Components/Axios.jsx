import React, { useEffect, useState } from "react";
import "../Styles/axios.css";
import axios from "axios";
import Card from "./Card";
const Axios = () => {
      const [user, setUser] = useState();
      useEffect(() => {
            const url = "https://randomuser.me/api/";
            axios.get(url)
                  .then((res) => setUser(res.data.results[0]))
                  .catch((error) => console.log(error));
      }, []);
      console.log(user);

      return (
            <div className="card">
                  {/* uso el ? para encadenar opcional casa que se de undefined */}
                  {/* <Card users={user} /> */}
            </div>
      );
};

export default Axios;
