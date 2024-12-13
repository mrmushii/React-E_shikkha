import React from "react";

const Testimonial = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-28 ">Testimonial</h1>
      <div className="flex justify-center items-center gap-14 mb-14 pb-16">
        <div>
          <img src="public/4.png" alt="" srcset="" className="w-36" />
        </div>
        <div>
          <p className="leading-loose">
            There are many variations of passages of Lorem Ipsum available, but
            the <br />
            majority have suffered alteration in some form, by injected humour,{" "}
            <br />
            or randomised words which don't look even slightly believable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
