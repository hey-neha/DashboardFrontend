import axios from "axios";
import React, { useState } from "react";

const FileCom = () => {
  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState(null); //state to hold the response data----------
  // const [showDisplayComponent, setShowDisplayComponent] = useState(false);
  //state to control visibility-----------

  const handleUplaod = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:9002/importUser", formData)
      .then((res) => {
        console.log(res);
        setResponseData(res.data);
        //store the response data in state --------------------
        setShowDisplayComponent(true);
        //show the displayComponent
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/*   className="mt-1 block w-full p-3 border border-gray-300 rounded-md
      shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
      sm:text-sm" */}
      <form className="" action="" onSubmit={handleUplaod}>
        <input
          className="w-full md:w-24 border border-gray-300 rounded-md focus:outline-none"
          type="file"
          name="file"
          placeholder="File upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="my-2  hover:bg-gray-200">Upload</button>
      </form>
      {/* {showDisplayComponent && <VIew data={responseData} />} */}
      {/* pass response data to another component---------------------------------------------------------- */}
    </div>
  );
};

export default FileCom;
