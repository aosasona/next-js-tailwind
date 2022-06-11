import Meta from "@/defaults/Meta";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Meta title="Home" desc="This is a description" />
      Hello World!
      <h1 className="text-6xl font-bold my-5">Tailwind is working</h1>
    </div>
  );
}
