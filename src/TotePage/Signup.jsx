import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Demo() {
  const navigate = useNavigate();
  const NextPageHandler = () => {
    navigate("/Welcome");
  };

  const [entername, setname] = useState("");
  const [entermail, setmail] = useState("");
  const [enterpassword, setpassword] = useState("");
  const [isvalid, setvalid] = useState("");
  const [formvalid, setformvalid] = useState(false);

  function OnSubmitHandler(event) {
    event.preventDefault();
  }

  function nameHandler(event) {
    setname(event.target.value);
  }
  function emailHandler(event) {
    setmail(event.target.value);
    setformvalid(
      event.target.value.includes("@") && enterpassword.trim().length > 7
    );
  }
  function passwordHandler(event) {
    setpassword(event.target.value);
    setformvalid(
      event.target.value.trim().length > 7 && entermail.includes("@")
    );
  }

  return (
    <>
      <div className="split left">
        <header>
          <a href="" className="logo">
            The tote
          </a>
        </header>
        <div className="centered">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAA_5W1w-FlAQidHtPYTC9xSJXUxGqSYTmA&usqp=CAU"></img>
        </div>
      </div>
      <div>
        <div class="container">
          <h2 class="login-title">Welcome to the Tote!</h2>

          <form onSubmit={OnSubmitHandler} class="login-form">
            <div>
              <label for="name">Name </label>
              <input
                className="Name"
                id="name"
                type="text"
                placeholder="Abc"
                name="name"
                required
                onChange={nameHandler}
              />
            </div>

            <div>
              <label for="email">Email </label>
              <input
                className="Email"
                id="email"
                type="email"
                placeholder="me@example.com"
                name="email"
                required
                onChange={emailHandler}
              />
            </div>

            <div>
              <label
                style={{ color: formvalid ? "white" : "red" }}
                for="password"
              >
                Password{" "}
              </label>
              <input
                className="Password"
                id="password"
                type="password"
                placeholder="minimum 8 character"
                name="password"
                required
                onChange={passwordHandler}
              />
            </div>

            <button
              onClick={NextPageHandler}
              class="btn btn--form"
              type="submit"
              disabled={!formvalid}
            >
              Connect Wallet
            </button>
            <label className="account">Dont have an ALA Wallet</label>
          </form>
        </div>
      </div>
    </>
  );
}
export default Demo;
