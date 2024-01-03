'use client'

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/navigation";

import { HiOutlineTranslate } from "react-icons/hi";

export default function App() {

  const pathName = usePathname()

  return (

    <Dropdown>
      <DropdownTrigger>
        <button>
          <HiOutlineTranslate size={24} />
        </button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="portuguese"
          startContent={<Image src='/pt_icon.png' width={32} height={32} alt="language" />}
        >
          <Link href={pathName} locale="pt">
            Português
          </Link>
        </DropdownItem>
        <DropdownItem
          key="english"
          startContent={<Image src='/us_icon.png' width={32} height={32} alt="language" />}
        >
          <Link href={pathName} locale="en">
            English
          </Link>
        </DropdownItem>
        <DropdownItem
          key="spanish"
          startContent={<Image src='/sp_icon.png' width={32} height={32} alt="language" />}
        >
          <Link href={pathName} locale="es">
            Spanish
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
