import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSistrix, FaUser, FaRegListAlt } from "react-icons/fa";
export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 bg-slate-700 text-white">
                <div className="logoArea">
                    <Image src='' alt='logoBrand' />
                </div>
                <div className="navArea flex flex-row justify-between items-center">
                    <div className="searchBarArea lg:flex justify-between items-center sm:mr-5 mr-3 lg:p-1 p-0 md:rounded-3xl lg:border lg:border-slate-600 lg:bg-slate-800">
                        <FaSistrix className="searchIcon lg:ml-2 ml-0 md:m-0 text-slate-400" />
                        <input type="text" className="lg:block hidden lg:pl-2 capitalize rounded-r-3xl w-full bg-slate-800 text-slate-400" placeholder="quick search" />
                    </div>
                    <Link href='' className="md:block hidden mr-5 capitalize text-slate-400 hover:text-slate-200">Home</Link>
                    <Link href='' className="nav4k mr-5 uppercase text-lime-500">4K</Link>
                    <Link href='' className="mr-5 capitalize text-slate-400 hover:text-slate-200"><span className="md:hidden block"><FaRegListAlt size={25} /></span><span className="md:block hidden">trending</span></Link>
                    <Link href='' className="mr-5 capitalize text-slate-400 hover:text-slate-200"><span className="md:hidden block"><FaRegListAlt size={25} /></span><span className="md:block hidden">browse movies</span></Link>
                    <div className="signUpArea flex justify-end items-center">
                        <Link href='' className="md:mr-5 capitalize text-slate-400 hover:text-slate-200"><span className="lg:hidden md:hidden sm:block block"> <FaUser size={25} /></span> <span className="lg:block md:block hidden">login</span> </Link>
                        <Link href='' className="md:block hidden md:mr-5 capitalize text-slate-400 hover:text-slate-200">Register</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
