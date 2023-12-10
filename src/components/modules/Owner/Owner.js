export default function Owner({ id, img, name, estate }) {
  return (
    <div className="flex justify-center items-center gap-2 my-2">
      <img src={img} alt={id} className="rounded-full max-h-16" />
      <div className="text-center">
        <p>{name}</p>
        <sub>{estate} فروش خانه</sub>
      </div>
    </div>
  );
}
