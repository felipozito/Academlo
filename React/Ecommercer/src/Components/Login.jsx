import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ".././Styles/login.css";

const Login = () => {
      const { register, handleSubmit, reset } = useForm();

      const navigate = useNavigate();

      const [error, setError] = useState("");
      const [log, setLog] = useState(false);

      useEffect(() => {
            if (localStorage.getItem("token")) {
                  setLog(true);
            }
      }, [localStorage]);

      const submit = (data) => {
            console.log(data);
            const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
            axios.post(URL, data)
                  .then((res) => {
                        console.log(res.data);
                        localStorage.setItem("token", res.data.data.token);
                        setError("");
                        setLog(true);
                  })
                  .catch((e) => setError("Invalid credentials"));
            setLog(false);

            reset({
                  email: "",
                  password: "",
            });
      };

      return (
            <div className="login-container">
                  <div className="main-container">
                        {log ? (
                              <div className="Sucess">
                                    <h2>LOGIN</h2>
                                    <button
                                          onClick={() => {
                                                localStorage.removeItem("token");
                                                setLog(false);
                                          }}
                                    >
                                          Log out
                                    </button>
                              </div>
                        ) : (
                              <form className="login" onSubmit={handleSubmit(submit)}>
                                    <strong>Welcome! Enter your email and password to continue</strong>
                                    {/* <p className="login-message">{loginMessage}</p> */}

                                    <div className="test-data">
                                          <b>Test data</b>
                                          <div className="field">
                                                <i className="icon-mail"></i>felipe@gmail.com
                                          </div>
                                          <div className="field">
                                                <i className="icon-lock"></i>pass1234
                                          </div>
                                    </div>

                                    <div className="input-container">
                                          <label htmlFor="email">Email</label>
                                          <input type="text" id="email" {...register("email")} />
                                    </div>
                                    <div className="input-container">
                                          <label htmlFor="password">Password</label>
                                          <input type="password" id="password" {...register("password")} />
                                    </div>
                                    <div className="error-message">{error}</div>
                                    <button className="submit-button">Login</button>

                                    <div className="switch-forms">
                                          Don't have an account?{" "}
                                          <button type="button" onClick={() => navigate("/signup")}>
                                                Sign up
                                          </button>
                                    </div>
                              </form>
                        )}
                  </div>
            </div>
      );
};

export default Login;
