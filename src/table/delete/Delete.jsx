import React, { useContext, useState } from "react";
import "./delete.scss";
import { Context } from "../Table";

const Delete = ({ setDeleteItem, setData }) => {
  const value = useContext(Context);
  const handleClose = () => {
    setDeleteItem(false);
  };

  const remove = () => {
    // console.log(setData);
    const id = value.id;
    // console.log(id);

    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteItem(false);
  };
  return (
    <div className="delete">
      <h3 className="delete_title">آیا این رکورد حذف شود؟</h3>

      <button className="Dbtn btn" onClick={remove}>
        بله
      </button>
      <button className="Dbtn btn" onClick={handleClose}>
        خیر
      </button>
    </div>
  );
};

export default Delete;
