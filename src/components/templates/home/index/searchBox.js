export default function SearchBox({ sort, setSort, search, setSearch }) {
  return (
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
  );
}
