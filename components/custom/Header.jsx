"use client"
import "../../app/animations.css"
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";

export const Header = () => {

    return (
        <header className={"w-full h-20 flex fixed bg-transparent z-10 top-0"}>
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
                        </ul>
                    </div>
                    {/*mobile menu*/}
                    <Menu>
                        <MenuHandler >
                            <svg className="w-5 h-5 sm:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 17 14">
                                <path stroke="#f8f8ff" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </MenuHandler>
                        <MenuList
                            className={"blur-30 mt-0.5 bg-transparent md:bg-primary  w-full gap-1.5  absolute sm:w-10/12 left-0 overflow-hidden mx-auto right-0 p-4 text-text text-base border-0 !top-16"}>
                            <MenuItem className={"!bg-transparent hover:bg-accent rounded-none !text-text"}><Link href={"/carta"}>Carta</Link></MenuItem>
                            <MenuItem className={"!bg-transparent hover:bg-accent rounded-none text-text"}>reserva</MenuItem>
                        </MenuList>
                    </Menu>

                    {/*<p className={"text-text text-base"}>Perfil</p>*/}
                </div>
            </nav>
        </header>
    )
}