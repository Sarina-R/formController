import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Table";
import "./table.scss";
import Delete from "./delete/Delete";
import Edit from "./edit/Edit";
import DataChart from "./chart/DataChart";

import { FaChartPie } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const TableData = ({ setData, updateData }) => {
  const value = useContext(Context);
  // console.log(value.name);

  const [deleteItem, setDeleteItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [chart, setChart] = useState(false);

  return (
    <tbody className="table-responsive">
      <tr>
        <td className="icons">
          <i className="icon">
            <FaChartPie onClick={() => setChart(true)} />
          </i>
          <i className="icon">
            <MdDelete onClick={() => setDeleteItem(true)} />
          </i>
          <i className="icon">
            <FaMapMarkerAlt />
          </i>
          <i className="icon">
            <FaRegEdit onClick={() => setEditItem(true)} />
          </i>
          <i className="icon">
            <Link className="eye" to={`/result/${value.id}`}>
              <FaEye />
            </Link>
          </i>
        </td>
        <td>{value.job}</td>
        <td>{value.code}</td>
        <td>{value.fathersName}</td>
        <td>{value.lastName}</td>
        <td>{value.name}</td>
        <td>{value.id}</td>
      </tr>
      {editItem && <Edit setEditItem={setEditItem} updateData={updateData} />}
      {deleteItem && <Delete setDeleteItem={setDeleteItem} setData={setData} />}
      {chart && <DataChart setChart={setChart} />}
    </tbody>
  );
};

export default TableData;
