import Image from "next/image";

export default function Home() {
  return (
    <main>
   <section className="grid grid-cols-2 h-[50vh]">
    <div className="bg-green-50">
      <p>
        The best URL shortener in the market.
      </p>
      <p>
        We are the most straightforward URL shortener in the world
      </p>
    </div>

    <div className="bg-red-500 flex justify start relative">
      <Image alt="an image of vector" src = {"/vector.jpg"} fill={true}/>
    </div>
   </section>
    </main>
  );
}
