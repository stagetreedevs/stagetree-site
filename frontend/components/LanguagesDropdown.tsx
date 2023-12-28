'use client'

import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const [selectedImage, setSelectedImage] = useState('/pt_icon.png'); // Defina a imagem inicial aqui se desejar

  const handleSelection = (key: string) => {
    switch(key) {
      case 'english':
        setSelectedImage('/us_icon.png');
        break;
      case 'spanish':
        setSelectedImage('/sp_icon.png');
        break;
      default:
        setSelectedImage('/pt_icon.png');
    }
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Image src={selectedImage} width={24} height={24} alt="language" className="cursor-pointer"/>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="portuguese"
          startContent={<Image src='/pt_icon.png' width={24} height={24} alt="language"/>}
          onClick={() => handleSelection('portuguese')}
        >
          Português
        </DropdownItem>
        <DropdownItem
          key="english"
          startContent={<Image src='/us_icon.png' width={24} height={24} alt="language"/>}
          onClick={() => handleSelection('english')}
        >
          English
        </DropdownItem>
        <DropdownItem
          key="spanish"
          startContent={<Image src='/sp_icon.png' width={24} height={24} alt="language"/>}
          onClick={() => handleSelection('spanish')}
        >
          Spanish
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
