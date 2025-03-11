"use client";

import { ProductPage } from "@/component/ProductPage";
import { ProductType } from "@/component/type";
import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function Cardpage() {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        console.log(res.data.data.data);
        setProducts(res.data.data.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products?.map((item) => {
        return (
          <ProductPage
            onClick={(a) => {
              console.log(a);
            }}
            key={item.id}
            item={item}
          />
        );
      })}
      <Pagination />
    </div>
  );
}

export default Cardpage;
