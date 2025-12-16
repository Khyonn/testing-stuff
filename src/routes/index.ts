import { redirect, createFileRoute } from "@tanstack/react-router";

import { z } from "zod/mini";
import { isAuthenticated } from "../store/features/auth";
import Dashboard from "./-/pages/Dashboard";

const searchParams = z.object({
  tagID: z.optional(z.string()),
});
export const Route = createFileRoute("/")({
  validateSearch: searchParams,
  beforeLoad({ context }) {
    if (!isAuthenticated(context.store.getState())) {
      throw redirect({ to: "/login", replace: true });
    }
  },
  component: Dashboard,
});
