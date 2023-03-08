import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { domain } from "./path";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
const Desserts = () => {
  const [desserts, setDesserts] = useState([]);
  const getData = () => {
    axios
      .get(`${domain}/api/desserts`)
      .then((res) => {
        console.log(res);
        setDesserts(res.data.desserts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteDessert = (id) => {
    axios
      .delete(`${domain}/api/desserts`, { data: { id } })
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
      <Link target="_blank" to={`${domain}/admin/api/dessert/add/`}>
        <div className="btn btn-success m-7">Añadir Postre</div>
      </Link>
      <div className="overflow-x-auto">
        {desserts.length > 0 ? (
          <table className="table w-1/2 mx-auto text-center">
            <thead>
              <tr>
                <th>Nombre del postre</th>
                <th>Cantidad</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              {desserts &&
                desserts.map((dessert) => (
                  <tr key={dessert.id}>
                    <td>{dessert.name}</td>
                    <td>{dessert.cantidad}</td>
                    <td className="flex justify-center gap-3">
                      <Link
                        target="_blank"
                        to={`${domain}/admin/api/dessert/${dessert.id}/change/`}
                      >
                        <button className="btn btn-sm btn-warning">
                          <PencilIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteDessert(dessert.id)}
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
              <span className="font-bold text-2xl">Aun no hay Postres</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Desserts;
