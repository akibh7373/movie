import Link from "next/link"
export default function Footer() {
    return (
        <>
            <footer className="footerContainer flex flex-col justify-center items-center px-5 py-3 text-center text-white" style={{ fontSize: '14px' }}>
                <div className="footerNavArea">
                    <span>&copy; 2023 - 2023 - </span>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">blog - </Link>
                    <Link href='/' className="uppercase text-white hover:text-slate-200">dmca - </Link>
                    <Link href='/' className="uppercase text-white hover:text-slate-200">api - </Link>
                    <Link href='/' className="uppercase text-white hover:text-slate-200">rss - </Link>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">contact - </Link>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">browse movies - </Link>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">request - </Link>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">login - </Link>
                    <Link href='/' className="capitalize text-white hover:text-slate-200">language </Link>
                </div>
                <p className="text-white">By using this site yu agree to and accept our <Link href='' className="capitalize text-white">user agreement</Link>, which can be read <Link href='' className="text-white">here</Link>.</p>
            </footer>
        </>
    )
}
