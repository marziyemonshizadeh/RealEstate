export default function Deatails({ estate }) {
  return (
    <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-1 grid-flow-cols">
      <img
        src={estate?.img}
        alt="111"
        className="xl:col-span-2 md:col-span-2 grid-cols-1"
      />
      <div className="xl:col-span-4 md:col-span-2 grid-cols-1 mx-2 leading-10">
        <div className="flex justify-between my-2">
          <p> فروشنده : {estate?.Seller} </p>
          <p>{estate?.price} تومان</p>
        </div>
        {/* badges */}
        <section className="inline-block bg-lime-400 px-2  ml-1 rounded">
          ویژه
        </section>
        <section className="inline-block bg-red-400 px-2  mr-1 rounded">
          برای اجاره
        </section>
        {/* address */}
        <p>
          <span className="title"> آدرس : </span>
          {estate?.address}
        </p>
        <p>
          <span className="title">شماره تماس : </span>
          {estate?.phoneNumber}
        </p>
        <div className="flex justify-between my-2 py-2 border-b-2 border-gray-300">
          <p>مرور کلی</p>
          <p>
            <span className="title"> کد ملک : </span>
            hz-HZ15
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="title">نوع ملک: </span>
            {estate?.title}
          </div>
          <div>
            <span className="title">اتاق : </span>
            {estate?.roomCount}
          </div>
          <div>
            <span className="title">متراژ : </span>
            {estate?.meterage}
          </div>
          <div>
            <span className="title">سال ساخت : </span>
            1402
          </div>
        </div>
      </div>
    </div>
  );
}
