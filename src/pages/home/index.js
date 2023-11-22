import Estate from "@/components/estate/estate";
import Link from "next/link";
import { useEffect, useState } from "react";

function home() {
  const [estate, setEstate] = useState([]);
  // copy
  const [homes, setHomes] = useState([]);

  const [sort, setSort] = useState("-1");
  const [activePage, setActivePage] = useState(1);
  //نیاز به مقدار پیش فرض دارد const [homes, setHomes] = useState([]);
  const [search, setSearch] = useState("");
  const pageItem = 3;

  //  fetching data
  useEffect(() => {
    fetch("http://localhost:4001/Estates")
      .then((res) => res.json())
      .then((estate) => {
        setEstate(estate);
        setHomes(estate);
      });
    setHomes[estate];
  }, []);
  // search data
  useEffect(() => {
    const newHomes = homes.filter((home) => home.title.includes(search));
    setEstate(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
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

  const paginateHandler = (event, page) => {
    event.preventDefault();
    console.log("Next Page =>", page);
    setActivePage(page);
    // paginated
    const endIndex = pageItem * page;
    const startIndex = endIndex - pageItem;

    const paginatedHomes = estate.slice(startIndex, endIndex);
    setHomes(paginatedHomes);
  };
  console.log("activepage", activePage);
  return (
    <>
      {console.log("search", search)}
      {console.log("estate", estate)}
      {console.log("homes", homes)}
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
        </div>
      </div>
      {estate.length > 0 ? (
        <>
          {/* املاک */}
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
            {homes.slice(0, pageItem).map((estate) => {
              return <Estate key={estate.id} {...estate} />;
            })}
          </div>
          {/* pagination */}
          <ul className="flex flex-row-reverse justify-center gap-x-3 my-6">
            {Array.from({ length: Math.ceil(estate.length / pageItem) }).map(
              (item, index) => (
                <Link
                  href="#"
                  key={index + 1}
                  className={`rounded-full bg-violet-950 text-slate-50 w-10 text-center h-10 p-2 hover:bg-indigo-900 ${
                    activePage == index + 1 ? " bg-slate-300" : ""
                  }`}
                  onClick={(event) => paginateHandler(event, index + 1)}
                >
                  <div className="">{index + 1}</div>
                </Link>
              )
            )}
          </ul>
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
