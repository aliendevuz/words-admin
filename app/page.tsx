import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <h1 className="text-3xl font-bold">4000 Words</h1>
        {/* click /login at here */}
        <a
          href="/login"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </a>
      </div>
    </div>
  );
}
