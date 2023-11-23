import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const [showSidebarItems, setShowSidebarItems] = useState(false);
  return (
    <>
      {!showSidebarItems ? (
        <div className="bg-indigo-950 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-24 lg:h-20 md:w-12 md:h-12 w-8 md:mx-auto md:pt-2 p-2 text-slate-200 transition "
            onClick={() => setShowSidebarItems((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      ) : (
        <div className="bg-slate-200 w-screen h-screen">
          <div className="flex flex-col justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-24 lg:h-20 md:w-12 md:h-12 w-8 m-5 text-indigo-900"
              onClick={() => setShowSidebarItems((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-col text-center items-center mt-8 select-none">
            <li className="w-[15rem] h-[4rem] p-5 bg-indigo-950 hover:bg-indigo-900 mb-5 text-slate-50">
              <Link
                href="/"
                onClick={() => setShowSidebarItems((prev) => !prev)}
              >
                صفحه ی اصلی
              </Link>
            </li>
            <li className="w-[15rem] h-[4rem] p-5 bg-indigo-950 hover:bg-indigo-900 mb-5 text-slate-50">
              <Link
                href="/features"
                onClick={() => setShowSidebarItems((prev) => !prev)}
              >
                ویژگی ها{" "}
              </Link>
            </li>
            <li className="w-[15rem] h-[4rem] p-5 bg-indigo-950 hover:bg-indigo-900 mb-5 text-slate-50">
              <Link
                href="/comments"
                onClick={() => setShowSidebarItems((prev) => !prev)}
              >
                نظرات{" "}
              </Link>
            </li>
            <li className="w-[15rem] h-[4rem] p-5 bg-indigo-950 hover:bg-indigo-900 mb-5 text-slate-50">
              <Link
                href="/home"
                onClick={() => setShowSidebarItems((prev) => !prev)}
              >
                خانه ها{" "}
              </Link>
            </li>
            <li className="w-[15rem] h-[4rem] p-5 bg-indigo-950 hover:bg-indigo-900 mb-5 text-slate-50">
              <Link
                href="/gallery"
                onClick={() => setShowSidebarItems((prev) => !prev)}
              >
                گالری{" "}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
