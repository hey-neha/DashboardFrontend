import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { BsArrowBarUp } from "react-icons/bs";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullname", headerName: "Full Name", width: 100 },
  { field: "mobileNum", headerName: "Number", width: 150 },
  { field: "dob", headerName: "Age", width: 100 },
  { field: "qualification", headerName: "Qualification", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "intrested", headerName: "Intrested", width: 100 },
  { field: "remark", headerName: "Remark", width: 100 },
];

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [isProfile, setIsProfile] = useState(false);

  const IsProfileFun = () => {
    setIsProfile(!isProfile);
  };

  /*  {
    "status": "success",
    "message": "Data fetched successfully",
    "employees": [
      {
        "fullname": "John Doe",
        "email": "john@example.com",
        "mobileNum": "1234567890",
        "dob": "1985-10-10"
      },
      // ... more employees
    ]
  } */

  /* color :-----  bg-gradient-to-r from-[#53ADE4] to-[#277BA8] lg:text-[13px] */
  /*  bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 rounded */
  /* bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] */

  useEffect(() => {
    axios
      .get("http://localhost:9002/get-employee")
      .then((response) => {
        // Assuming response.data.employees is an array of employee objects
        const employees = response.data.employees.map((user, index) => ({
          id: index + 1,
          fullname: user.fullname,
          email: user.email,
          mobileNum: user.mobileNum,
          dob: user.dob,
          qualification: user.qualification,
          intrested: user.intrested,
          remark: user.remark,
        }));
        setUsers(employees);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white w-full p-5 md:p-8  h-auto">
      {/*  <div className="mb-4">
        <div className="flex gap-2 w-[160px] shadow-sm hover:bg-gray-100 rounded-2xl p-3">
          <CgProfile style={{ width: "50px", height: "50px" }} />
          <img className="w-16 h-10 mt-2 " src={veredaImg} alt="" />
          <RiArrowRightWideFill
            className="w-10 h-10 mt-1"
            onClick={IsProfileFun}
          />
        </div>
        {isProfile ? (
          <div className="bg-white p-8 w-[210px] absolute z-10 shadow-2xl my-4 rounded-2xl">
            <div className="flex justify-center gap-5 hover:bg-gray-200 mr-7">
              <CgProfile style={{ width: "20px", height: "20px" }} />
              <p>Profile</p>
            </div>
            <div className="flex justify-center hover:bg-gray-200 gap-5 mr-7 mt-8">
              <IoMdLogOut style={{ width: "20px", height: "20px" }} />
              <p>Logout</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div> */}

      <div className="bg-gray-100 rounded-xl w-full h-auto">
        <div className="" style={{ height: "80%", width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
