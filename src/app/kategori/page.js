import React from "react";
import Card from "@/components/card";
import Image from "next/image";

export default function page() {
  const ya = Array("gunung prau", "bukit sekuter", "gunung sindoro");
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-red-500 pt-5 pl-10">
        Pesona Wonosobo
      </h1>

      <div className=" mt-5  h-10">
        <Image src="/bg.svg" width={450} height={100} />
      </div>
    </div>
  );
}
