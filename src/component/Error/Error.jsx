import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  let redirect = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col text-bold h-[50vh]">
      <h2 className="text-red-700">Oops! Entered route not found</h2>
      <button onClick={() => redirect("/")}>Go Back</button>
    </div>
  );
};

export default Error;
