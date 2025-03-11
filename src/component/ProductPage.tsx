import Link from "next/link";
import { ProductType } from "./type";

type ProductTypeProp = { item: ProductType; onClick: (id: number) => void };

export function ProductPage({ item, onClick }: ProductTypeProp) {
  return (
    <div className="my-5"   key={item.id}>
      <Link href={`/product/${item.id}`}
        onClick={() => {
          onClick(item.id);
        }}
        className="w-80   p-5 bg-white text-black rounded-2xl flex flex-col gap-2 "
      >
        <img className="w-[310px] h-[250px]  rounded-2xl" src={item.image} alt="" />
        <div className="p-5">
        <p>{item.name}</p>
        <p className="text-2xl py-5 font-bold ">{(item.sale_price).toLocaleString("ru")} So'm</p>
        </div>
      </Link>
    </div>
  );
}
