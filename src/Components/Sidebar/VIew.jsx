import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const VIew = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9002/get-employee")
      .then((response) => {
        // console.log(response.data, "--------------------------------------------");
        setUsers(response.data.employees);
      })

      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  return (
    /* className="w-100 vh-100 d-flex border  justify-content-center align-item-center" */
    <div className="w-100 flex justify-center items-center">
      <div className="w-full">
        <table className="">
          <thead className="">
            <tr
              className="flex justify-between  gap-16 text-center
                "
            >
              <input type="checkbox" />
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  className="flex justify-between  text-center gap-32
                "
                >
                  <input type="checkbox" />
                  <td className="p-2">{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNum}</td>
                  <td>{user.dob}</td>
                </tr>
              );
            })}
          </tbody>
          {/*   file uploading data--------------------------------- */}
        </table>
      </div>
    </div>
  );
};

export default VIew;
