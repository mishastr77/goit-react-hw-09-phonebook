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

export default function RegisterView() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const onRegister = (data) => dispatch(authOperations.register(data));

  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(state);

    setState((prev) => ({
      ...prev,
      name: "",
      email: "",
      password: "",
    }));
  };

  const { name, email, password } = state;

  return (
    <div>
      <h1>Page of registration</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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
          Registration
        </Button>
      </form>
    </div>
  );
}
