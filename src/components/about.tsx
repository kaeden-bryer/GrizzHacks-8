export default function About() {
  return (
    <section id="about" className="h-screen w-full bg-primary p-2 py-10">
      <h3 className="text-3xl font-medium font-recoleta text-heading text-center sm:text-6xl">
        About
      </h3>
      <div className="flex flex-col sm:flex-row text-light">
        <p className="text-lg">A quackathon is coming to Oakland!</p>
        <p className="">We&aposre bringing GrizzHacks back</p>
      </div>
      <p>
        We&aposre back at OU with a Quackathon GrizzHacks is a 24 hour
        engineering marathon, welcome to anyone. Whether you&aposre a seasoned
        developer building a new idea, a beginner looking to sharpen your
        skills, or a unrelated major just interested in learning more, we have
        something for you! Over the course of 24 hours, each team will build a
        project from the ground up and then present their work to a panel of
        judges to compete for prizes! You&aposre allowed to create anything you
        can think up but if you need some inspiration, check out our tracks this
        year. Still have questions? Check out our FAQ.
      </p>
    </section>
  );
}
