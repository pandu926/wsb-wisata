"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (typeof item.name === "string") {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });

    setFilteredData(filtered);
  }, [data, keyword]);

  return (
    <div
      className="bg-[url('/bg.png')] bg-blue-500 bg-colo bg-center w-full min-h-screen"
      loading="lazy"
    >
      <div className="pt-10 capitalize flex justify-between text-white max-w-7xl mx-auto font-bold px-5">
        <Link
          href="/tes"
          className="border-white border-b-4 text-base md:text-2xl"
        >
          Pesona wonosobo
        </Link>
        <Link href="/kategori" className="text-base md:text-2xl">
          kategori
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-60 relative">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          className="w-2/4 h-12 border-2 border-grey-600 z-20 drop-shadow-lg border-solid bg-white rounded-3xl p-4"
          placeholder="masukkan kata kunci"
        />
        <div
          className={`w-2/4 bg-white -translate-y-10 rounded-3xl h-64 ${
            keyword ? "" : "hidden"
          }`}
        >
          <div className="pt-12">
            {filteredData.map((item) => (
              <Link href={`/wisata/${item.id}`} key={item.id} className="flex">
                <p className="pr-5">{item.id}</p>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
