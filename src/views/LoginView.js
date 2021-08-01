import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const onLogin = (data) => dispatch(authOperations.logIn(data));

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(state);

    setState((prev) => ({
      ...prev,
      email: "",
      password: "",
    }));
  };

  const { email, password } = state;

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
