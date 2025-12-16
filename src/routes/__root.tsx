import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Layout } from "../components/ui";
import type store from "../store";

export const Route = createRootRouteWithContext<{ store: typeof store }>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});
