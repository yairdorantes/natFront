import axios from "axios";
import { useEffect, useState } from "react";
import { domain } from "./path";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export const Cakes = () => {
  const [cakes, setCakes] = useState([]);
  const getData = () => {
    axios
      .get(`${domain}/api/cakes`)
      .then((res) => {
        console.log(res);
        setCakes(res.data.cakes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCakes = (id) => {
    axios
      .delete(`${domain}/api/cakes`, { data: { id } })
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
      <Link target="_blank" to={`${domain}/admin/api/cake/add/`}>
        <div className="btn btn-success m-7">Añadir Pastel</div>
      </Link>
      <div className="overflow-x-auto ">
        {cakes.length > 0 ? (
          <table className="table w-3/4 mx-auto text-center  table-zebra">
            <thead>
              <tr>
                <th>nombre</th>
                <th>Sabor</th>
                <th>cantidad</th>
                <th>Precio</th>
                <th>Peso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cakes &&
                cakes.map((c) => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.flavor}</td>
                    <td>{c.cantidad}</td>
                    <td>{c.price}</td>
                    <td>{c.weight}</td>
                    <td className="flex justify-center gap-3">
                      <Link
                        target="_blank"
                        to={`${domain}/admin/api/cake/${c.id}/change/`}
                      >
                        <button className="btn btn-sm btn-warning">
                          <PencilIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteCakes(c.id)}
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
              <span className="font-bold text-2xl">Aun no hay Pasteles</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
