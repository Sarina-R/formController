import React, { useState, useEffect } from "react";
import "./result.scss";
import { useParams } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const url = "../../data.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const { id } = useParams();

  const item = data.find((dataItem) => dataItem.id === parseInt(id));
  if (!item) {
    return <div>آیتمی یافت نشد.</div>;
  }
  return (
    <div className="container col">
      <div className="row">
        <h4 className="col">{item.name}</h4>
        <h3 className="col">نام</h3>
      </div>
      <div className="row">
        <h4 className="col">{item.lastName}</h4>
        <h3 className="col">نام خانوادگی</h3>
      </div>
      <div className="row">
        <h4 className="col">{item.fathersName}</h4>
        <h3 className="col">نام پدر</h3>
      </div>
      <div className="row">
        <h4 className="col">{item.code}</h4>
        <h3 className="col">کد ملی</h3>
      </div>
      <div className="row">
        <h4 className="col">{item.home}</h4>
        <h3 className="col">آدرس</h3>
      </div>
      <div className="row">
        <h4 className="col">{item.job}</h4>
        <h3 className="col">شغل</h3>
      </div>
    </div>
  );
};

export default Result;
