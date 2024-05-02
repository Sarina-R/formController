import React, { useContext, useState } from "react";
import "./add.scss";
import { Context } from "../../Table";

const Add = () => {
  // const value = useContext(Context);
  const { addUser } = useContext(Context);
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    fathersName: "",
    code: "",
    home: "",
    job: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser); // call function from Context
    setNewUser({
      name: "",
      lastName: "",
      fathersName: "",
      code: "",
      home: "",
      job: "",
    });
  };

  return (
    <div className="container ">
      <form className="addUser" onSubmit={handleSubmit}>
        {/* Input for name */}
        <div className="inputSection">
          <label className="col ">:نام</label>
          <input
            class="form-control col mr-sm-2 m-1 "
            type="text"
            name="name"
            placeholder="نام"
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        {/* Input for lastName */}
        <div className="inputSection">
          <label className="col ">:نام خانوادگی</label>
          <input
            class="form-control col mr-sm-2 m-1 "
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Input for fathersName */}
        <div className="inputSection">
          <label className="col ">:نام پدر</label>
          <input
            class="form-control col mr-sm-2 m-1 "
            type="text"
            placeholder="نام پدر"
            name="fathersName"
            value={newUser.fathersName}
            onChange={handleChange}
          />
        </div>

        {/* Input for job */}
        <div className="inputSection">
          <label className="col ">:شغل</label>
          <input
            class="form-control col mr-sm-2 m-1 "
            type="text"
            placeholder="شغل"
            name="job"
            value={newUser.job}
            onChange={handleChange}
          />
        </div>
        {/* Input for home */}
        <div className="inputSection">
          <label className="col ">:آدرس</label>
          <input
            class="form-control col mr-sm-2 m-1 "
            type="text"
            placeholder="آدرس"
            name="home"
            value={newUser.home}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          افزودن
        </button>
      </form>
    </div>
  );
};

export default Add;
