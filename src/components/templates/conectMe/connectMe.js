import Information from "@/components/modules/information/information";

export default function ConnectMe({ aboutUs }) {
  return (
    <div className="bg-slate-100 max-w-[25rem] max-h-[25rem] p-8 mx-auto m-5 rounded-2xl shadow">
      <Information data={aboutUs} />
    </div>
  );
}
