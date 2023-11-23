export default function Feature({ title, description }) {
  return (
    <div className="hover:bg-gray-200 rounded-2xl p-4">
      <h2 className="font-extrabold text-lg text-indigo-950">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
