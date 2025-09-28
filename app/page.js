import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-purple-200">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-3xl font-bold">
              The best URL shortener in the Market.
            </p>
            <p className="px-30 text-center" >
              We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
            </p>
          </div>
          <div className="flex justify-start relative">
            <Image alt="an Image of a vector" src={"/vector.jpg"} fill={true} className="mix-blend-multiply" />
          </div>
        </section>
      </main>
    </>
  );
}
