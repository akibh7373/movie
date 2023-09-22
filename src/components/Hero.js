import Link from "next/link";
import Btn from "@/utlis/Buttons";
export default function Hero() {
    return (
        <>
            <div className="hero flex flex-col justify-end items-center px-5 pb-[30px] md:h-[70vh] h-[50vh] radial-bg text-center text-white">
                <h1 className="uppercase font-bold">All Movies One Platform</h1>
                <p className="my-4">Best movies of all time. Here you can browse and download movies in excellent.</p>
                <Link href='#' className="mt-4 font-bold text-black"><Btn title="streaming" /></Link>
            </div>
        </>
    )
}
