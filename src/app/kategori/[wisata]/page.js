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
      {data?.map((item) => (
        <div className="flex">
          <p className="pr-5">{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
