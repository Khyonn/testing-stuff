import { createFileRoute, redirect } from "@tanstack/react-router";

import LoginPage from "./-/pages/LoginPage";
import { isAuthenticated } from "../store/features/auth";

export const Route = createFileRoute("/login")({
  beforeLoad({ context }) {
    if (isAuthenticated(context.store.getState())) {
      throw redirect({ to: "/", replace: true });
    }
  },
  component: LoginPage,
});
