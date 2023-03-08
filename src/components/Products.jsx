import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { domain } from "./path";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    axios
      .get(`${domain}/api/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteProduct = (id) => {
    axios
      .delete(`${domain}/api/products`, { data: { id } })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Link target="_blank" to={`${domain}/admin/api/product/add/`}>
        <div className="btn btn-success m-7">Añadir Producto</div>
      </Link>
      <div className="overflow-x-auto">
        {products.length > 0 ? (
          <table className="table w-1/2 mx-auto text-center">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>Nombre del producto</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.cantidad}</td>
                    <td className="flex justify-center gap-3">
                      <Link
                        target="_blank"
                        to={`${domain}/admin/api/product/${product.id}/change/`}
                      >
                        <button className="btn btn-sm btn-warning">
                          <PencilIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="btn btn-sm btn-error"
                      >
                        <TrashIcon className="h-6 w-6 text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-info shadow-lg w-1/2 mx-auto ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="font-bold text-2xl">Aun no hay Productos</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
