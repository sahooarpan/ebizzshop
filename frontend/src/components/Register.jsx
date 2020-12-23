import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const auth = useSelector((state) => state.user);
  console.log(auth, "auth");
  const { userInfo } = auth;

  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      history.push("/shop");
    }
  }, [userInfo, history]);
  useEffect(() => {
    if (name.length > 0) {
      const delay = setTimeout(() => {
        if (!/[^a-z]/i.test(name) === false) {
          setNameErrorMessage("Name must contain only alphabets and no spaces");
        } else if (name.length > 0) {
          setNameErrorMessage("");
        }
      });
      return () => {
        clearTimeout(delay);
      };
    }
  }, [name]);
  useEffect(() => {
    if (password.length > 0 && confirmPassword > 0) {
      if (password !== confirmPassword) {
        setPasswordErrorMessage("Password must match");
      } else {
        setPasswordErrorMessage("");
      }
    }
  }, [password, confirmPassword]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className="d-flex justify-content-center ">
      <form className="form-container bg-light" onSubmit={onSubmit}>
        <h3 className="display-4 text-primary">Register</h3>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            placeholder="Enter name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p className="text-danger">{nameErrorMessage}</p>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p className="text-danger">{passwordErrorMessage}</p>
        </div>
        <button
          disabled={
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "" ||
            passwordErrorMessage !== ""
          }
          type="submit"
          class="btn btn-primary px-3"
        >
          Submit
        </button>
        <p className="form-text">
          Have an account ?{" "}
          <Link className="header-link" to="/signin">
            Please login{" "}
          </Link>
          here.
        </p>
      </form>
    </div>
  );
};

export default Register;
