import React from "react";
import { CakeIcon } from "@heroicons/react/24/outline";
import bg from "../media/bg.jpg";
import products from "../media/product.png";
import help from "../media/help.png";
import insumos from "../media/insumos.png";
import cake from "../media/cake.jpeg";
import postres from "../media/postre.png";
import pasteles from "../media/pastel.png";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
    >
      <div className="pt-10 px-6 ">
        <div className="max-w-5xl mx-auto">
          <img src={cake} className="w-24 mx-auto" alt="" />
          <h1 className="text-5xl mt-10  font-bold text-center text-white mb-24">
            Inventario pasteleria{" "}
            <span className="text-amber-400">Zaragoza</span>
          </h1>
          <div className="flex gap-16 flex-wrap justify-center">
            <Link to="/material">
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={help} className="w-32" alt="" />
                <button className="btn btn-info">Material de apoyo</button>
              </div>
            </Link>
            <Link to="/productos">
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={products} className="w-32" alt="" />
                <button className="btn btn-warning">Productos</button>
              </div>
            </Link>
            <Link to="/insumos">
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={insumos} className="w-32" alt="" />
                <button className="btn btn-success">Insumos</button>
              </div>
            </Link>
            <Link to="/postres">
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={postres} className="w-32" alt="" />
                <button className="btn btn-error">Postres</button>
              </div>
            </Link>
            <Link to="/pasteles">
              <div className="flex flex-col justify-center items-center gap-5">
                <img src={pasteles} className="w-32" alt="" />
                <button className="btn btn-accent">Pasteles</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
