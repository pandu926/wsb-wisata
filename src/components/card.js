import React from "react";
import Image from "next/image";

export default function Card({ title }) {
  return (
    <div className=" mt-5 sm:w-1/2 md:w-1/4">
      <div className=" w-64  bg-white  rounded-lg ">
        <a href="#">
          <img src="/bg.svg" alt="gunung prau" loading="lazy" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="flex justify-center mb-2 text-lg font-bold ">
              {title}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
