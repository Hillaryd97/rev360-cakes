import Home from "./components/Home";
import Order from "./components/Order";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Menu from "./components/Menu";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="order" element={<Order />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
