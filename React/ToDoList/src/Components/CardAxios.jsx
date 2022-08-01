import React from "react";

const CardAxios = ({ users }) => {
      return (
            <div key={user.id.value}>
                  <h1>axios</h1>
                  <h2>
                        Name: {user?.name.first} {user?.name.last}
                  </h2>
                  <img src={user?.picture.large} alt="" />
                  <p>Email:{user?.email}</p>
                  <p>Phone:{user?.phone}</p>
                  <p>Location:{user?.location.city + ", " + user?.location.country}</p>
            </div>
      );
};

export default CardAxios;
