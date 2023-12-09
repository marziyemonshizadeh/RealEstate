export default function Comment({ img, type, comment, userName }) {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 my-2 border-2 md:p-10 p-2 hover:bg-slate-200 h-44">
      <img
        src={img}
        alt={type}
        className="col-span-1 rounded-full max-h-16 w-16 mx-auto"
      />
      <div className="col-span-1 text-center">
        <p>{userName}</p>
        <desc>{comment}</desc>
      </div>
    </div>
  );
}
