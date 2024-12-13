import React, { useState } from "react";
import CountUp from "react-countup";

const Card = () => {
  const data = [
    {
      id: "1",
      image: "/public/image 1.png",
      data: "1500",
      topic: "Topic",
      des: "Learn Amythings",
    },
    {
      id: "1",
      image: "/public/image 2.png",
      data: "1800",
      topic: "Students",
      des: "Learn Amythings",
    },
    {
      id: "1",
      image: "/public/image 3.png",
      data: "9000",
      topic: "Test Token",
      des: "Learn Amythings",
    },
    {
      id: "1",
      image: "/public/image 4.png",
      data: "2000",
      topic: "Student",
      des: "Learn Amythings",
    },
  ];

  return (
    <div className="flex mx-64 justify-between mt-16 flex-wrap ">
      {data.map((card) => (
        <div className="bg-herobg px-32 py-16 rounded-2xl">
          <center>
            <img src={card.image} alt="" className="w-16 " />
            <br />
            <CountUp
              start={0}
              end={card.data}
              duration={3}
              className="text-4xl font-semibold"
            />
            <span className="text-4xl font-semibold">+</span>
            <h1 className="text-lg text-slate-400 leading-snug">
              {card.topic}
            </h1>
            <p>{card.des}</p>
          </center>
        </div>
      ))}
    </div>
  );
};

export default Card;
