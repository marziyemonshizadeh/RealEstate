import Feature from "@/components/modules/feature/feature";

export default function Features({ feature }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16 mx-4">
      {feature?.map((feature) => {
        return (
          <Feature key={feature.id} {...feature}>
            {feature.description}
          </Feature>
        );
      })}
    </section>
  );
}
