import Link from "next/link";

export default function Estate({ id, img, title, roomCount, meterage, price }) {
  return (
    <div className="max-w-[25rem] max-h-[40rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <img className="rounded-t-lg h-72 w-full" src={img} alt="img" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="text-2xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="font-normal grid grid-cols-2 gap-2 mb-5">
          <p>مالدیو</p>
          <p>{roomCount} اتاق</p>
          <p>{meterage} متر مربع</p>
          <p>{price.toLocaleString()} میلیون تومان</p>
        </div>
        <Link href={`/home/${id}`} className="btn py-2">
          املاک ما را مشاهده کنید
        </Link>
      </div>
    </div>
  );
}
