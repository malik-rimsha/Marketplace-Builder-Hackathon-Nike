import Image from "next/image";
export default function Essential() {
    return (
        <section className="m-4" >
            <div>
                <h2 className="font-semibold text-xl py-5 ml-7"> The Essentials</h2>
            </div>
            <div className="flex justify-evenly flex-wrap gap-1">
                <Image width={300} height={400} alt="" src={"/e1.png"} />
                <Image width={300} height={400} alt="" src={"/e2.png"} />
                <Image width={300} height={400} alt="" src={"/e3.png"} />
            </div>
        </section>
    );
}