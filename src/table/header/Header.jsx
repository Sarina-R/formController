import React, { useState } from "react";
import "./header.scss";
import { CiSearch } from "react-icons/ci";
import Add from "./add/Add";
import { MdClose } from "react-icons/md";

const Header = ({ onSearch }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");

  const [addUser, setAddUser] = useState(false);

  const handleSearch = () => {
    onSearch(code, last, name);
  };

  return (
    <div className="bg-light row d-flex align-items-center justify-content-center mb-4">
      <h2 className="titleJ">جستجو</h2>
      <nav className="row justify-content-center">
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleSearch}
        >
          <CiSearch className="icon" />
        </button>
        <div className="col-md-4 col-sm-12 row holder d-flex align-items-center justify-content-center">
          <input
            className="form-control  mr-sm-2 m-1 "
            type="search"
            placeholder="کد ملی"
            aria-label="Search"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <label className=" ">:کد ملی</label>
        </div>
        <div className="col-md-4 row holder d-flex align-items-center justify-content-center">
          <input
            className="form-control col mr-sm-2 m-1 "
            type="search"
            placeholder="نام خانوادگی"
            aria-label="Search"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <label className="col ">:نام خانوادگی</label>
        </div>
        <div className="col-md-4 row holder d-flex align-items-center justify-content-center">
          <input
            className="form-control col mr-sm-2 m-1 "
            type="search"
            placeholder="نام"
            aria-label="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="col ">:نام</label>
        </div>
      </nav>
      {!addUser ? (
        <button className="button1 " onClick={() => setAddUser(!addUser)}>
          افزودن
        </button>
      ) : (
        <button className="button1 " onClick={() => setAddUser(!addUser)}>
          <MdClose />
        </button>
      )}
      {addUser && <Add />}
    </div>
  );
};

export default Header;
