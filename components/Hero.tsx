export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center p-10">
      <h1 className="text-5xl font-bold">Hello</h1>
      <p className="text-xl">Here's who I am & what I do</p>
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Resume</button>
        <button className="border px-4 py-2 ml-2 rounded">Projects</button>
      </div>
    </section>
  );
}
