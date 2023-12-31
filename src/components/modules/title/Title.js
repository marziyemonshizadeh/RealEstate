export default function Title({ text }) {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-96 h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <span className="absolute px-3 font-bold text-gray-900 -translate-x-1/ bg-slate-100 left-1/ dark:text-white dark:bg-gray-900">
        {text}
      </span>
    </div>
  );
}
