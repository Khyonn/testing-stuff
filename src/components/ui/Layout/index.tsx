import { Navigate } from "@tanstack/react-router";

import Button from "../form/Button";
import { useAppDispatch, useAppSelector } from "../../../store";
import authSlice, { isAuthenticated } from "../../../store/features/auth";

import styles from "./styles.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const isAuth = useAppSelector(isAuthenticated);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        {isAuth ? (
          <Button onClick={() => dispatch(authSlice.actions.disconnect())}>
            Logout
          </Button>
        ) : (
          <Navigate to="/login" replace />
        )}
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
