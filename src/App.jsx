import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Providers from "./pages/Providers";
import Customers from "./pages/Customers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/providers/:id" element={<Providers />} />
        <Route path="/customers/:id" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </div>
  );
}

export default App;
