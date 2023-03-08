import { Routes, Route } from "react-router-dom";
import { Cakes } from "../components/Cakes";
import Main from "../components/Main";
import Material from "../components/Material";
import Products from "../components/Products";
import Insumos from "../components/Insumos";
import Desserts from "../components/Desserts";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pasteles" element={<Cakes />} />
      <Route path="/material" element={<Material />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/insumos" element={<Insumos />} />
      <Route path="/postres" element={<Desserts />} />
    </Routes>
  );
};

export default MyRoutes;
