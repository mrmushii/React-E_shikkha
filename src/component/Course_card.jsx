import React from "react";
import Button from "./Button";

const Course_card = ({ course_data }) => {
  return (
    <>
      {course_data.map((data) => (
        <div className=" border-.5 shadow-lg w-full p-9 rounded-2xl pb-16">
          <img src={data.image} alt="" srcset="" className="" />
          <h1 className="text-2xl my-4">{data.name}</h1>
          <p className="text-sm text-slate-400 mb-4">{data.description}</p>
          <Button
            placeholder={"Buy course"}
            className={"text-white bg-btn rounded-3xl p-3 px-6 my-4"}
          />
        </div>
      ))}
    </>
  );
};

export default Course_card;
