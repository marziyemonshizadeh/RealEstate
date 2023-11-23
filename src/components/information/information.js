import { useEffect, useState } from "react";

export default function Information() {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch("http://localhost:4001/aboutUs")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="text-center my-8">
      <p className="font-bold text-2xl mb-8">راه های ارتباطی با ما</p>
      {info?.length
        ? info.map((i) => {
            return (
              <div key={i.id} className="my-5">
                <span className="title">{i.title} : </span>
                {i.info}
              </div>
            );
          })
        : null}
    </div>
  );
}
