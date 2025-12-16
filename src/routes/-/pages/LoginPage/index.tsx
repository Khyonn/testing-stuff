import { Navigate } from "@tanstack/react-router";

import { useAppDispatch, useAppSelector } from "../../../../store";
import authSlice, { isAuthenticated } from "../../../../store/features/auth";
import { Button } from "../../../../components/ui";

import styles from './styles.module.css'

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthenticated);

  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          dispatch(authSlice.actions.setToken("1234"));
        }}
      >
        Simulate login
      </Button>
      {isAuth && <Navigate to="/" replace />}
    </div>
  );
}
