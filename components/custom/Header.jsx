"use client"
import "../../app/animations.css"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export const Header = () => {
    const [isOpen, setIsopen]=useState(false)
    const handleOpen = () =>{
        setIsopen(!isOpen)
    }
    return (
        <header className={"w-full h-20 flex fixed bg-transparent md:bg-primary z-10 top-0"}>
            <nav className="max-w-screen-2xl w-full mx-auto flex justify-between items-center px-8">
                <div className="w-[150px] h-auto">
                    <Link href={"/"}>
                        <Image
                            src={process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + '/image/upload/v1717259269/thumbnail_logo_sin_eslogan.webp'}
                            alt={"imagen de prueba"}
                            width={150}
                            height={100}
                        />
                    </Link>
                </div>
                <div className=" flex gap-1.5 items-center">
                    {/*desktop menu*/}
                    <div className="sm:flex hidden">
                        <ul className="w-full flex gap-1.5  text-text text-base">
                            <li><Link href={"/carta"}>Carta</Link></li>
                            <li>Reserva</li>
                            <li>conócenos</li>
                        </ul>
                    </div>
                    {/*mobile menu*/}
                    <div className="sm:hidden ">
                        <button
                            data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden "
                            onClick={handleOpen}
                                >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 17 14">
                                <path stroke="#f8f8ff" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        {( isOpen &&
                            <ul className={` ${isOpen ? "mostrar backdrop-blur" : ""} mt-0.5 bg-transparent md:bg-primary  w-full gap-1.5  absolute w-10/12 left-0 overflow-hidden mx-auto right-0 p-2 text-text text-base`}>
                                <li className={"py-2 border-b-2 mostrar1"}><Link href={"/carta"}>Carta</Link></li>
                                <li className={"py-2 border-b-2 mostrar2"}>reserva</li>
                                <li className={"py-2 border-b-2 mostrar3"}>conócenos</li>
                                <li className={"py-2 border-b-2 mostrar4"}>únete</li>
                            </ul>
                        )}
                    </div>
                    <a className={"text-text text-base"}>Perfil</a>
                </div>
            </nav>
        </header>
    )
}