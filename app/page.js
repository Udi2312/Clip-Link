import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
   <section className="grid grid-cols-2 h-[50vh]">
    <div className="flex flex-col gap-4 items-center justify-center">
      <p className="text-3xl font-bold">
        The best URL shortener in the market.
      </p>
      <p className="px-56 text-center">
        We are the most straightforward URL shortener in the world
      </p>
      <div className='flex gap-3 justify-start'>
                <Link href="/generate"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>Github</button></Link>
            </div>
    </div>

    <div className=" flex justify start relative">
      <Image className="mix-blend-darken" alt="an image of vector" src = {"/vector.jpg"} fill={true}/>
    </div>
   </section>
    </main>
  );
}
