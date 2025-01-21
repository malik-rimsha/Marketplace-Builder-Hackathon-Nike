
export default function Hellobar() {
  return (
    <div className="w-full bg-[#F5F5F5] hidden md:flex items-center py-2 px-4 justify-between">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-0">
        <p className="text-black font-extrabold whitespace-nowrap">Hello Nike App</p>
        <p className="text-black font-normal">
          Download the app to access everything Nike.{" "}
          <span className="font-bold underline hover:text-blue-900 cursor-pointer">
            Get Your Great
          </span>
        </p>
      </div>
    </div>
  );
}
