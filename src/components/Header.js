import Link from "next/link";
import Btn from "@/utlis/Buttons";
export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-5 text-white" style={{ backdropFilter: 'blur(30px)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <div className="logoArea">
                    Movie
                </div>
                <div className="navArea flex flex-row justify-between items-center">
                    <Link href='' className="md:block hidden mr-5 uppercase text-white">streaming</Link>
                    <Link href='' className="mr-5 uppercase text-white">plans</Link>
                    <Link href='' className="md:block hidden mr-5 uppercase text-white">Anime</Link>
                    <Link href='' className="md:block hidden mr-5 uppercase text-white">Tv shows</Link>
                    <Link href='' className="uppercase text-white">browse movies</Link>
                </div>
                <div className="signUpArea flex justify-end items-center">
                    <Link href='' className="uppercase"><Btn title="login"/> </Link>
                </div>
            </header>
        </>
    )
}
