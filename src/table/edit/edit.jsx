import React, { useContext, useState } from "react";
import { Context } from "../Table";
import "./edit.scss";

const Edit = ({ setEditItem, updateData }) => {
  const value = useContext(Context);
  const [formData, setFormData] = useState(value);

  const handleCancel = () => {
    setEditItem(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(formData);
  };

  return (
    <div className="edit">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />
      <input
        type="text"
        name="fathersName"
        value={formData.fathersName}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />
      <input
        type="text"
        name="code"
        value={formData.code}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />
      <input
        type="text"
        name="home"
        value={formData.home}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
        class="form-control col mr-sm-2 m-1 "
      />

      <button className="Dbtn btn" onClick={handleSubmit}>
        ویرایش
      </button>
      <button className="Dbtn btn" onClick={handleCancel}>
        انصراف
      </button>
    </div>
  );
};

export default Edit;
