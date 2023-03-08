import axios from "axios";
import { useEffect, useState } from "react";
import { domain } from "./path";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Insumos = () => {
  const [insumos, setInsumos] = useState([]);
  const getData = () => {
    axios
      .get(`${domain}/api/insumos`)
      .then((res) => {
        console.log(res);
        setInsumos(res.data.insumos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteInsumo = (id) => {
    axios
      .delete(`${domain}/api/insumos`, { data: { id } })
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
      <Link target="_blank" to={`${domain}/admin/api/insumos/add/`}>
        <div className="btn btn-success m-7">Añadir Insumos</div>
      </Link>
      <div className="overflow-x-auto">
        {insumos.length > 0 ? (
          <table className="table w-1/2 text-center mx-auto">
            <thead>
              <tr>
                <th>Nombre del insumo</th>
                <th>Cantidad</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              {insumos &&
                insumos.map((insumo) => (
                  <tr>
                    <th>{insumo.name}</th>
                    <td>{insumo.cantidad}</td>
                    <td className="flex justify-center gap-3">
                      <Link
                        target="_blank"
                        to={`${domain}/admin/api/insumos/${insumo.id}/change/`}
                      >
                        <button className="btn btn-sm btn-warning">
                          <PencilIcon className="h-6 w-6 text-white" />
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteInsumo(insumo.id)}
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
              <span className="font-bold text-2xl">Aun no hay insumos</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Insumos;
