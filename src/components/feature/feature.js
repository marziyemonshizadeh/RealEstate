export default function Feature({ title, children }) {
  return (
    <div className="hover:bg-gray-200 text-center  rounded-2xl p-4">
      <h2 className="font-extrabold text-lg hover:text-xl text-indigo-950">
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}
