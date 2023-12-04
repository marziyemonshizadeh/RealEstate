import TheBestDecision from "../../../modules/TheBestDecision/TheBestDecision";

export default function TheBestDecisionSection() {
  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1  grid-flow-cols">
      <div className="col-span-2 bg-indigo-950 h-96 flex justify-center items-center">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/623895203d240dfa0b8590a6/newly-built-luxury-home-in-the-san-fernando-valley-located-at-3369-Alana-Dr/960x0.jpg?format=jpg&width=960"
          alt="simplehouse"
          className="max-w-sm  rounded-lg"
        />
      </div>
      <TheBestDecision />
    </section>
  );
}
