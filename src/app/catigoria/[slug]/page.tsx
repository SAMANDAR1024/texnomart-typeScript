"use client";

import { catigoriaType } from "@/component/type";
import { Pagination } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CatigoriaPage() {
  const { slug } = useParams();

  const [catigories, setCatigories] = useState<catigoriaType>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data.data);
        setCatigories(res.data.data);
      });
  }, [slug, currentPage]);

  return (
   <div>
     <div className="grid grid-cols-4 gap-5 my-10">
      {catigories && catigories.products && catigories.products.length > 0 ? (
        catigories.products.map((item) => {
          return (
            <div key={item.id} className="w-80 rounded-2xl h-[450px] bg-white">
              <img
                className="h-68 w-60 rounded-2xl mx-auto"
                src={item.image}
                alt=""
              />
              <div className="p-3 text-black ">
                <p className="py-1 font-medium text-lg">{item.name}</p>
                <div className="mt-10">
                  <p className="text-2xl font-bold">
                    {item.sale_price.toLocaleString("ru")} So'm
                  </p>
                  <p className="text-red-800">{item.axiom_monthly_price}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading..</div>
      )}
    </div>
      <Pagination
  
        defaultCurrent={currentPage}
        total={catigories?.total}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
   </div>
  );
}

export default CatigoriaPage;
