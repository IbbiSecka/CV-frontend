import Image from "next/image";


export default async function Hero() {

  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="bg-beige shadow-lg rounded-2xl p-6 text-center">
        <Image src="/profile.jpg" alt="Profile" width={150} height={150} className="rounded-full mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Ibrahima Secka</h2>
        <p className="text-gray-600">Software Engineer</p>
      </div>
    </section>
  );
}
