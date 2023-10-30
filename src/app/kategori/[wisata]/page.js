"use client";
import { useParams } from "next/navigation";
import Card from "@/components/card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function page() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get("https://653beb34d5d6790f5ec7a438.mockapi.io/wisata")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { wisata } = useParams();
  return (
    <div>
      <h1 className="font-extrabold  mb-10 sm:text-lg md:text-2xl ml-20 mt-10 capitalize">
        {wisata}
      </h1>
      <div className=" flex flex-wrap mx-20">
        {data?.map((item) => (
          <Card title={item.name} />
        ))}
      </div>
    </div>
  );
}
