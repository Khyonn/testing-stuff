import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import store from "./store";

// Create a new router instance
const router = createRouter({ routeTree, context: { store } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} basepath={import.meta.env.BASE_URL} />
    </Provider>
  </StrictMode>
);
