import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <section className="bg-herobg w-full h-full">
        <nav className="flex justify-between pt-7 mx-52">
          <div>
            <img
              src="/public/Logo.png"
              alt=""
              srcset=""
              className="w-48 cursor-pointer"
            />
          </div>
          <ul className="flex items-center justify-evenly gap-4 cursor-pointer">
            <li>Books</li>
            <li>Courses</li>
            <li>Others</li>
            <li>Blog</li>
            <Button
              placeholder={"Sign in"}
              className={"text-white bg-btn rounded-3xl p-2 px-6"}
            />
          </ul>
        </nav>
        <div className="flex items-center mx-52 mt-28 justify-between flex-wrap">
          <div>
            <p className="text-lg text-red-500">Are you ready to Learn?</p>
            <br />
            <h1 className=" text-7xl font-bold leading-tight ">
              Learn With fun <br />
              on <span className="text-btn">any schedule</span>
            </h1>
            <br />
            <p className="text-lg text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Varius blandit facilisis quam netus.
            </p>
            <br />
            <Button
              placeholder={"Get Started"}
              className={"text-white bg-btn rounded-3xl p-3 px-6"}
            />
          </div>
          <div>
            <img src="/public/Hero.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
