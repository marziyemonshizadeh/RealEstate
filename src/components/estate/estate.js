import Link from "next/link";

export default function Estate({ id, img, title, roomCount, meterage, price }) {
  return (
    <div className="max-w-sm max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-72 w-full" src={img} alt="img" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-2xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="mb-3 font-normal grid grid-cols-2 gap-2">
          <p>مالدیو</p>
          <p>{roomCount} اتاق</p>
          <p>{meterage} متر مربع</p>
          <p>{price} میلیون تومان</p>
        </div>
        <Link href={`/home/${id}`} className="btn py-2">
          املاک ما را مشاهده کنید
        </Link>
      </div>
    </div>
  );
}
