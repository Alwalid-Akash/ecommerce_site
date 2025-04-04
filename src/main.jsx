import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ Import Router
import "./index.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import myStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag></Bag>

      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
