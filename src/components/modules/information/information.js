export default function Information({ data }) {
  return (
    <div className="text-center my-8">
      <p className="font-bold text-2xl mb-8">راه های ارتباطی با ما</p>
      {data?.length
        ? data.map((i) => {
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
