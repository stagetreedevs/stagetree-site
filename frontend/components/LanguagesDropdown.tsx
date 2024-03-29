'use client'

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/navigation";

import { HiOutlineTranslate } from "react-icons/hi";

export default function App() {

  const pathName = usePathname()

  const router = useRouter();
  const handleItemClick = (locale: string) => {
    router.push(pathName, { locale }); 
  };

  return (

    <Dropdown>
      <DropdownTrigger>
        <button className="hover:bg-white-50 transition-all p-2 rounded-lg hover:shadow-lg">
          <HiOutlineTranslate size={24} />
        </button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="portuguese"
          startContent={<Image src='/pt_icon.png' width={32} height={32} alt="language" 
          />}
          onClick={() => handleItemClick("pt")}
        >
            Português
        </DropdownItem>
        <DropdownItem
          key="english"
          startContent={<Image src='/en_icon.png' width={32} height={32} alt="language" />}
          onClick={() => handleItemClick("en")}
        >
            English
        </DropdownItem>
        <DropdownItem
          key="spanish"
          startContent={<Image src='/es_icon.png' width={32} height={32} alt="language" />}
          onClick={() => handleItemClick("es")}
        >
            Spanish
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
