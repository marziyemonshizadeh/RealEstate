import Estate from "@/components/estate/estate";
import Link from "next/link";
import { useEffect, useState } from "react";

function home() {
  const [estate, setEstate] = useState([]);
  const [sort, setSort] = useState("-1");
  //نیاز به مقدار پیش فرض دارد const [homes, setHomes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4001/Estates")
      .then((res) => res.json())
      .then((estate) => setEstate(estate));
  }, []);
  useEffect(() => {
    const newHomes = estate.filter((home) => home.title.includes(search));
    setEstate(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...estate].sort((a, b) => a.price - b.price);
        setEstate(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...estate].sort((a, b) => a.roomCount - b.roomCount);
        setEstate(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...estate].sort((a, b) => a.meterage - b.meterage);
        setEstate(newHomes);
        break;
      }
      default: {
        // do not work
        setEstate([...estate]);
      }
    }
  }, [sort]);
  return (
    <>
      {console.log("search", search)}
      {console.log("estate", estate)}
      {/* {console.log("homes", homes)} */}
      <div className="flex justify-center">
        <select
          name=""
          id=""
          className="focus:outline-blue-800 border shadow m-4"
          defaultValue={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="-1">انتخاب کنید</option>
          <option value="price">بر اساس قیمت</option>
          <option value="room">بر اساس تعداد اتاق</option>
          <option value="meterage">بر اساس اندازه</option>
        </select>
        <div className="flex justify-center m-4">
          <input
            className="shadow appearance-none border rounded-s w-full py-2 px-3 text-gray-700 leading-tight max-w-md focus:outline-blue-800 focus:shadow-outline"
            id="username"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="عنوان خانه مورد نظر را وارد کنید"
          />
          <Link
            href="#"
            className="bg-indigo-950 text-slate-50 text-center py-2 px-3 hover:bg-indigo-900"
          >
            جستجو
          </Link>
        </div>
      </div>
      {estate.length > 0 ? (
        <>
          {/* املاک */}
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
            {estate.map((estate) => {
              return <Estate key={estate.id} {...estate} />;
            })}
          </div>
          {/* pagination */}
          <div className="flex flex-row-reverse justify-center gap-x-3 my-6">
            <div className="paginationBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="paginationBtn">1</div>
            <div className="paginationBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center mx-auto h-screen my-14">
          <p className="text-slate-50 h-14 bg-indigo-950 p-4">
            خانه ی مورد نظر یافت نشد!!!
          </p>
        </div>
      )}
    </>
  );
}

export default home;
