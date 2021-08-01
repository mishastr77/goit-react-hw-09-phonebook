import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const email = useSelector(authSelectors.getUseremail);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <span style={styles.mail}> Welcome, {email} </span>
      <Button
        onClick={onLogout}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Logout
      </Button>
    </div>
  );
}
