import Link from "next/link";
import { useEffect, useState } from "react";
import Owner from "../Owner/Owner";

export default function Header() {
  const [topOwners, setTopOwners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/TopOwners")
      .then((res) => res.json())
      .then((owners) => setTopOwners(owners));
  }, []);
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  grid-flow-cols">
      <div className="xl:col-span-3 md:col-span-2 grid-cols-1  bg-slate-200 leading-10 py-5">
        <div className="md:pr-24 pr-10">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/495/230/original/real-estate-logo-1-free-png.png"
            alt="real-estate-logo"
            className="w-36 mx-auto"
          />
          <p className="font-extrabold text-3xl my-4">خانه خودتان:</p>
          <h1 className="font-extrabold text-3xl text-slate-700 my-2">
            با خرید خانه نهایت آزادی را احساس کنید
          </h1>

          <Link href="/home" className="btn py-2 my-10">
            تمامی املاک ما را مشاهده کنید
          </Link>
        </div>
      </div>
      <div className=" xl:col-span-1 md:col-span-1 grid-cols-1 bg-slate-900 text-slate-100 flex flex-col justify-center items-center py-5">
        <p>سه مالک برتر</p>
        {topOwners.map((items) => {
          return <Owner key={items.id} {...items} />;
        })}
      </div>
    </div>
  );
}
