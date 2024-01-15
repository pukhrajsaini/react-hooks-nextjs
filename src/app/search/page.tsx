"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SearchRoute() {
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  const tableRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleTableElement = (hide: boolean = false) => {
    const element = tableRef.current as any;
    if (element) {
      if (hide) {
        element.style.display = "none";
        return;
      }
      if (list?.length) element.style.display = "block";
      else element.style.display = "none";
    }
  };

  useEffect(() => {
    listCategories().then((res) => setCategories(res));
  }, []);

  useEffect(() => {
    searchProducts(searchInput, selectedCategory)
      .then((res) => {
        setList(res);
        handleTableElement();
      })
      .catch((err) => console.log(err));
  }, [searchInput, selectedCategory]);

  const handleSearchInput = (event: any) => {
    const searchText = event.target.value;
    if (searchText.length >= 2) {
      setSearchInput(searchText);
    } else {
      handleTableElement(true);
    }
  };

  const handleCategorySelection = (event: any) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div className="container w-1/2 mx-auto px-4 py-4">
      <form className="flex flex-row">
        {/* <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ALL
        </label> */}
        <select
          onChange={handleCategorySelection}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64"
        >
          <option value="">ALL</option>
          {categories.map((e: string) => (
            <option value={e}> {e}</option>
          ))}
        </select>

        {/* <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label> */}
        <div className="relative w-full mx-1">
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
          />
        </div>
      </form>

      <div className="relative overflow-x-auto" ref={tableRef}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {list?.map((e: any) => (
              <tr
                key={e._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{e?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

async function searchProducts(search: string, category = "") {
  const data = await (
    await fetch(
      `http://localhost:3009/bookings/v1/products/search?search=${search}&category=${category}`
    )
  ).json();
  return data.result;
}
async function listCategories() {
  const data = await (
    await fetch(`http://localhost:3009/bookings/v1/products/categories`)
  ).json();
  return data.result;
}
