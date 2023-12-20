'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import React, { useState } from "react";

import { HiOutlineTranslate } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="flexBetween max-container relative z-300 py-5 border-b-2 padding-container">
            <Link href="/">
                <Image src="/stagetree-logotype.svg" alt="logo" width={161} height={39} />
            </Link>

            <div className="lg:flexCenter gap-5 hidden">

                {/* Lista de links de navegação na versão desktop */}
                <ul className="h-full gap-5 flex">
                    {NAV_LINKS.map((link) => (
                        // Cada item da lista é um link de navegação
                        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold">
                            {/* O conteúdo do link é o rótulo do link */}
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <Button
                    type="button"
                    title="Entre em Contato"
                    variant="Annotation"
                />

                <button>
                    <HiOutlineTranslate
                        size={18}
                    />
                </button>
            </div>

            {/* Ícone de menu */}
            <div onClick={toggleMenu} className="inline-block cursor-pointer lg:hidden bg-green-90 p-2 rounded-[8px] shadow">
                {/* <div> */}
                <HiMenu
                    size={18}
                    color={"#F3F3F3"}
                />
            </div>

            {/* Menu lateral */}
            {menuOpen && (
                <div className="fixed top-0 right-0 h-60 w-full bg-white-90 z-50 px-6 py-5 flex flex-col rounded-b-[8px]">

                    <div className="flexBetween w-full mb-10">
                        <Image src="/logomark.svg" alt="logo" width={38} height={39} />

                        <div onClick={toggleMenu} className="inline-block cursor-pointer bg-green-90 p-2 rounded-[8px] shadow">
                            <HiX
                                size={18}
                                color={"#F3F3F3"}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-start">
                        <ul className="h-full flex-col">
                            {NAV_LINKS.map((link) => (
                                // Cada item da lista é um link de navegação
                                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold mb-5">
                                    {/* O conteúdo do link é o rótulo do link */}
                                    {link.label}
                                </Link>
                            ))}
                        </ul>

                        <button>
                            <HiOutlineTranslate
                                size={18}
                            />
                        </button>

                    </div>

                </div>

            )}
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    )
}

export default Navbar;