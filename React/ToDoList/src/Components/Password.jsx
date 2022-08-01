import React, { useState } from "react";

const Password = () => {
      const [state, setState] = useState("password");
      const handleSubmit = () => {
            state == "password" ? setState("text") : setState("password");
      };
      return (
            <div>
                  <label htmlFor="">Password</label>
                  <input type={state} />
                  <button onClick={handleSubmit}>{state == "password" ? "Show" : "Hidden"}</button>
            </div>
      );
};

export default Password;
