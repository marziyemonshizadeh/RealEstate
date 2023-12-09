import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function sentYourEstate() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:4001/Estates", data).then((res) => {
      console.log("get post called");
      toast.success("! ملک مورد نظر با موفقیت اضافه شد", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return res.data;
    });
    reset();
  };
  return (
    <>
      <form className="max-w-sm mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <header className="header">لطفا اطلاعات ملک خود را وارد کنید </header>
        <ToastContainer />
        <input
          type="text"
          id="text"
          placeholder="عنوان خانه"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p className="text-red-700">لطفا عنوان خانه را وارد کنید !</p>
        )}

        <input
          type="text"
          id="text"
          placeholder="آدرس تصویر مورد نظر را وارد کنید"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("img", { required: true })}
        />
        {errors.img && (
          <p className="text-red-700">لطفا آدرس تصویر را وارد کنید !</p>
        )}

        <input
          type="text"
          id="text"
          placeholder=" تعداد اتاق"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("roomCount", { required: true, maxLength: 1 })}
        />
        {/* error */}
        {errors.roomCount && errors.roomCount.type === "required" && (
          <p className="text-red-700">لطفا تعداد اتاق را وارد کنید!</p>
        )}
        {errors.roomCount && errors.roomCount.type === "maxLength" && (
          <p className="text-red-700">لطفا تعداد اتاق را درست وارد کنید!</p>
        )}
        <input
          type="text"
          id="text"
          placeholder="متراژ"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("meterage", { required: true })}
        />
        {errors.meterage && (
          <p className="text-red-700">لطفا عنوان خانه را وارد کنید!</p>
        )}

        <input
          type="text"
          id="text"
          placeholder="قیمت مورد نظر"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p className="text-red-700">لطفا قیمت را وارد کنید!</p>
        )}

        <input
          type="text"
          id="text"
          placeholder="آدرس"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <p className="text-red-700">لطفا آدرس را وارد کنید!</p>
        )}

        <input
          type="text"
          id="text"
          placeholder="شماره تماس"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <p className="text-red-700">لطفا شماره تماس را وارد کنید!</p>
        )}

        <input
          type="text"
          id="email"
          placeholder="ایمیل"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: " لطفا ایمیل خود را به درستی وارد کنید!",
            },
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="text-red-700">لطفا ایمیل خود را وارد کنید!</p>
        )}
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
        <button type="submit" className="btn p-2">
          Submit
        </button>
      </form>
    </>
  );
}
