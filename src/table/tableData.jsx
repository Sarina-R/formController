import React, { useContext } from "react";
import { Context } from "./Table";
import "./table.scss";

import { FaChartPie } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const TableData = () => {
  const value = useContext(Context);
  // console.log(value.name);
  return (
    <tbody>
      <tr>
        <td className="icons">
          <i>
            <FaChartPie />
          </i>
          <i>
            <MdDelete />
          </i>
          <i>
            <FaMapMarkerAlt />
          </i>
          <i>
            <FaRegEdit />
          </i>
          <i>
            <FaEye />
          </i>
        </td>
        <td>{value.job}</td>
        <td>{value.code}</td>
        <td>{value.fathersName}</td>
        <td>{value.lastName}</td>
        <td>{value.name}</td>
        <td>{value.id}</td>
      </tr>
    </tbody>
  );
};

export default TableData;
