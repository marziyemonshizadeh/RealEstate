import Link from "next/link";

export default function PaginationButton({
  estate,
  pageItem,
  activePage,
  paginateHandler,
}) {
  return (
    <ul className="flex flex-row-reverse justify-center gap-x-3 my-6">
      {Array.from({ length: Math.ceil(estate.length / pageItem) }).map(
        (item, index) => (
          <Link
            href="#"
            key={index + 1}
            className={`rounded-full text-slate-50 w-10 text-center h-10 p-2 hover:bg-indigo-900 ${
              Number(activePage) == Number(index + 1)
                ? "bg-indigo-700"
                : "bg-violet-950"
            }`}
            onClick={(event) => paginateHandler(event, index + 1)}
          >
            <div className="">{index + 1}</div>
          </Link>
        )
      )}
    </ul>
  );
}
