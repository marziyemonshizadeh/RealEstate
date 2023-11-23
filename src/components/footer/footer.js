import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 p-6 py-24 text-slate-200 text-center bg-indigo-950">
      <Link href="/home" className="hover:text-indigo-400">
        خانه رویای خودراپیداکنید
      </Link>
      <p className="hover:text-indigo-400">درخواست پروپوزال</p>
      <p className="hover:text-indigo-400">برنامه اجاره خانه</p>
      <Link href="/conectMe" className="hover:text-indigo-400">
        با ما تماس بگیرید
      </Link>
      <Link href="/sentMe" className="hover:text-indigo-400">
        ملک خود راارسال کنید
      </Link>
      <Link href="/aboutUs" className="hover:text-indigo-400">
        باماکارکنید
      </Link>
    </div>
  );
}
