"use client";
import axios from "axios";
import { log } from "console";
import Link from "next/link";
import { type } from "os";
import React, { useEffect, useState } from "react";

function Catigoria() {
  type Catigory = {
    title: string;
    slug:string
  };
  const [catigoriaa, setCatigoriaa] = useState<Catigory[]>([]);

  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        setCatigoriaa(res.data.data.data);
      });
  }, []);
  return (
    <div className="flex items-center my-4 justify-between px-10">
      {catigoriaa.map((item, id) => (
        <Link key={id} href={`/catigoria/${item.slug}`}>
          <p key={id}>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Catigoria;
