import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  routes,
} from "react-router-dom";
import Signup from "./TotePage/Signup.jsx";
import Welcome from "./TotePage/Welcome";

const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  { path: "/Welcome", element: <Welcome /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
