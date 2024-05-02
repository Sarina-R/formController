import React, { useEffect, useState } from "react";
import TableData from "./tableData";
import Header from "./header/Header";

export const Context = React.createContext();

const url = "../../public/data.json";

const Table = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    code: "",
    lastName: "",
    name: "",
  });

  const addUser = (newUserData) => {
    setData((prevData) => [
      ...prevData,
      { ...newUserData, id: prevData.length + 1 },
    ]);
  };

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

  const handleSearch = (code, lastName, name) => {
    setSearchCriteria({ code, lastName, name });
  };

  const filteredData = data.filter((item) => {
    return (
      item.code.includes(searchCriteria.code) &&
      item.lastName.includes(searchCriteria.lastName) &&
      item.name.includes(searchCriteria.name)
    );
  });

  const contextValue = { data, addUser };
  return (
    <Context.Provider value={contextValue}>
      <div className="container">
        {error ? (
          <div>{error.message}</div>
        ) : data ? (
          <>
            <Header onSearch={handleSearch} />
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">عملیات</th>

                  <th scope="col">شغل</th>
                  <th scope="col">کد ملی</th>
                  <th scope="col">نام پدر</th>
                  <th scope="col">نام خانوادگی</th>
                  <th scope="col">نام</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              {filteredData.map((item) => {
                return (
                  <Context.Provider
                    key={item.id}
                    value={{
                      id: item.id,
                      name: item.name,
                      lastName: item.lastName,
                      fathersName: item.fathersName,
                      code: item.code,
                      home: item.home,
                      job: item.job,
                    }}
                  >
                    <TableData />
                  </Context.Provider>
                );
              })}
            </table>
          </>
        ) : (
          <>درحال بارگیری...</>
        )}
      </div>
    </Context.Provider>
  );
};

export default Table;
