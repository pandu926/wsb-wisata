import React from "react";
import "../../styles/home.css";
import Card from "@/components/card";

export default function page() {
  const ya = Array("gunung prau", "bukit sekuter", "gunung sindoro");
  return (
    <div>
      <h1 className="text">Pesona Wonosobo</h1>
      <h1 className="text2">Gunung \ Bukit</h1>
      <div className="container">
        {ya.map((item) => (
          <Card title={item} />
        ))}
      </div>
    </div>
  );
}
