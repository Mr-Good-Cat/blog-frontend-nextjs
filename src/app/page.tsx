import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="px-3 pt-5 border-gray-300 border-r absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
        <h3 className="mb-4 text-sm font-semibold text-black">Main category</h3>

        <ul>
          <Link href="/wow" className="mr-2 text-gray-700 hover:text-blue-300">
            <li>WOW</li>
          </Link>
          <Link href="/d2" className="mr-2 text-gray-700 hover:text-blue-300">
            <li>D2</li>
          </Link>
          <Link href="/overwatch" className="text-gray-700 hover:text-blue-300">
            <li>Overwatch</li>
          </Link>
        </ul>
      </div>
      <div className="relative flex flex-1 flex-wrap justify-between overflow-y-auto overflow-x-hidden px-4 pt-5">
        <div className="w-0.5 relative border border-gray-300 rounded-md bg-white mb-4">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
          <Image
            src="/cat.jpg"
            alt="cat"
            layout={"fill"}
            className="z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <p className="text-2xl text-white font-semibold">New Article</p>
            <p className="text-white">Description</p>
          </div>
        </div>

        <div className="w-0.5 relative border border-gray-300 rounded-md bg-white mb-4">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
          <Image
            src="/cat.jpg"
            alt="cat"
            layout={"fill"}
            className="z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <p className="text-2xl text-white font-semibold">New Article</p>
            <p className="text-white">Description</p>
          </div>
        </div>

        <div className="w-0.5 relative border border-gray-300 rounded-md bg-white mb-4">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
          <Image
            src="/cat.jpg"
            alt="cat"
            layout={"fill"}
            className="z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <p className="text-2xl text-white font-semibold">New Article</p>
            <p className="text-white">Description</p>
          </div>
        </div>

        <div className="w-0.5 relative border border-gray-300 rounded-md bg-white mb-4">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
          <Image
            src="/cat.jpg"
            alt="cat"
            layout={"fill"}
            className="z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <p className="text-2xl text-white font-semibold">New Article</p>
            <p className="text-white">Description</p>
          </div>
        </div>

        <div className="w-0.5 relative border border-gray-300 rounded-md bg-white mb-4">
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
          <Image
            src="/cat.jpg"
            alt="cat"
            layout={"fill"}
            className="z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <p className="text-2xl text-white font-semibold">New Article</p>
            <p className="text-white">Description</p>
          </div>
        </div>
      </div>
    </main>
  );
}
