"use client";

import axios from "axios";
import { log } from "console";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductIdPage() {
  type cardType = {
    id: number;
    name: string;
    sale_price: number;
    large_images: string[];
  };
  const { id } = useParams();
  const [card, setCard] = useState<cardType>();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((res) => {
        console.log(res.data.data.data);
        setCard(res.data.data.data);
      });
  }, []);

  return (
    <div className="p-10 flex gap-20 items-center">
      <div>
        <h2 className="text-4xl mb-5">{card?.name}</h2>
        <img className="w-96 h-96" src={card?.large_images[1]} alt="" />
      </div>
      <p className="text-blue-500 text-4xl">{card?.sale_price?.toLocaleString("ru")}  So'm</p>
    </div>
  );
}

export default ProductIdPage;
