import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import About from "./routes/about";
import Home from "./routes/home";
import Garden from "./routes/garden";
import Now from "./routes/now";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root outlet={<ErrorPage />} />,
    children: [
      {
        children: [
          { path: "/", element: <Home /> },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/garden",
            element: <Garden />,
          },
          {
            path: "/now",
            element: <Now />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
