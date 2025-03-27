import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";
import { RouterProvider, createBrowserRouter } from "react-router";
import Body from "./components/Body/Body.jsx";
import WatchPage from "./components/Watch/WatchPage.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Sidebar />
            <Body />
          </>
        ),
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
