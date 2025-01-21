
export default function Main() {
    return (
        <div className="">
            {/* First Section: Image and Title */}
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] ml-4 mr-4">
                    <img className="w-full h-auto" src="first.png" alt="Logo" />
                </div>
            </div>
            <h1 className="text-center text-[#111111] mt-10 font-normal">First Look</h1>
            <h2 className="text-center text-[#111111]  font-semibold text-4xl md:text-2xl lg:text-5xl">NIKE AIR MAX PULSE</h2>
            <p className="text-center text-[#111111]  font-thin mx-10 mt-6 md:mx-20 lg:mx-40">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br /> — designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center items-center mt-6 space-x-2">
                <button className="bg-[#111111]  text-white rounded-full flex justify-center items-center px-4 py-2 text-xs md:text-base">Notify Me</button>
                <button className="bg-[#111111]  text-white rounded-full flex justify-center items-center px-4 py-2 text-xs md:text-base">Shop Air Max</button>
            </div>
        </div>
    );
}




