"use client";
import { useEffect, useRef, useState } from "react";

export default function SearchRoute() {
  const inputEl = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState([""]);

  useEffect(() => {
    searchProducts(searchInput)
      .then((res) => {
        setList(res);
      })
      .catch((err) => console.log(err));
  }, [searchInput]);

  const handleSearchInput = (event: any) => {
    const searchText = event.target.value;
    if (searchText.length >= 2) {
      setSearchInput(searchText);
    }
  };

  const handleOnRowClick = (event: any) => {
    console.log(event.target.nodeValue);
  };

  return (
    <div className="container w-1/2 mx-auto px-4 py-4">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={handleSearchInput}
            ref={inputEl}
          />
          {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
        </div>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {list?.map((e: any) => (
              <tr
                key={e._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4" onClick={handleOnRowClick}>
                  {e?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

async function searchProducts(search: string) {
  const data = await (
    await fetch(
      `http://localhost:3009/bookings/v1/products/search?search=${search}`
    )
  ).json();
  return data.result;
}
