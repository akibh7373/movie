import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="hero flex flex-col justify-center items-center px-5 md:pb-[50px] pb-5 pt-[80px] radial-bg text-center text-white">
                <h1 className="capitalize">All Movies One Platform</h1>
                <p className="lg:mt-2 mt-3">Best movies of all time. Here you can browse and download movies in excellent.</p>
                <Link href='' className="lg:my-[50px] px-4 py-2 uppercase font-bold rounded-3xl bg-yellow text-zinc-900">Streaming</Link>
            </div>
        </>
    )
}
