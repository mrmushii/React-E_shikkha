import React from "react";
import Course_card from "./Course_card";

const Courses = () => {
  const course_data = [
    {
      name: "Modern Psychology",
      description: "Designation",
      image: "public/1.png",
    },
    {
      name: "Modern Psychology",
      description: "Designation",
      image: "public/2.png",
    },
    {
      name: "Modern Psychology",
      description: "Designation",
      image: "public/3.png",
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl my-24 font-bold">Online Courses</h1>
      <div className="flex justify-around pt-7 mx-52 gap-28 my-24 ">
        <Course_card course_data={course_data} />
      </div>
    </>
  );
};

export default Courses;
