export default function Estate({ img }) {
  return (
    <div className="max-w-sm max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-72 w-full" src={img} alt="img" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-2xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
            آپارتمان خانوادگی مدرن
          </h5>
        </a>
        <div className="mb-3 font-normal grid grid-cols-2 gap-2">
          <p>مالدیو</p>
          <p>4 اتاق</p>
          <p>400 متر مربع</p>
          <p>560 میلیون تومان</p>
        </div>
        <button className="btn py-2">املاک ما را مشاهده کنید</button>
      </div>
    </div>
  );
}
