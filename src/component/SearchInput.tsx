"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "./icon";
import SearchIcon from "./SearchIcon";
import { searchInputType } from "./type";

function SearchInput() {
  const [searchState, setSearchState] = useState<searchInputType>();
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://gateway.texnomart.uz/api/common/v1/search/header", {
        params: {
          q: input,
        },
      })
      .then((res) => {
        console.log(res.data.data);

        if (res.data.data.products.length) {
          setSearchState(res.data.data);
        }
      });
  }, [input]);

  return (
    <div className="max-w-md mx-auto">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.length === 0) {
              setSearchState(undefined);
            }
          }}
        />

        {searchState ? (
          <div className="absolute z-20 bg-black w-[450px] h-[500px] overflow-auto   mt-2 p-3 rounded-xl">
            <div className="text-end">
              <button onClick={()=>{
                setSearchState(undefined)
                setInput("")
              }} className="text-2xl cursor-pointer ">X</button>
            </div>
            {searchState?.models.map((item) => {
              return (
                <p
                  className="bg-gray-400 px-2 p-0.5 rounded inline-block my-2 mx-2"
                  key={item.id}
                >
                  {item.title}
                </p>
              );
            })}
            {searchState?.categories.map((item) => {
              return (
                <div className=" flex mb-2  gap-6">
                  <Icon />
                  <p key={item.id}>{item.title}</p>
                </div>
              );
            })}
            {searchState?.products.map((item) => {
              return (
                <div className="flex gap-2 py-2">
                  <img className="w-[24px] h-[24px]" src={item.image} alt="" />
                  <p key={item.id}>{item.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
