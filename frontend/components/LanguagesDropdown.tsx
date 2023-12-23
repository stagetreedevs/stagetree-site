import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import Image from "next/image";

export default function LanguagesDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["portuguese"])); // Defina a chave inicial aqui se desejar

  const selectedImage = React.useMemo(() => {
    // Encontre o item correspondente à chave selecionada
    const selectedItem = dropdownItems.find((item) => item.key === selectedKeys.values().next().value);

    // Retorna a imagem correspondente se o item for encontrado
    return selectedItem ? selectedItem.image : null;
  }, [selectedKeys]);


  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          {selectedImage && (
            <Image
              src={selectedImage}
              width={24}
              height={24}
              alt="language"
            />
          )}
        </button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {dropdownItems.map((item) => (
          <DropdownItem key={item.key} >
            <div className="flex items-center flex-row gap-2 ">

              <Image
                src={item.image}
                width={24}
                height={24}
                alt="language"
              />
              {item.label}

            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

const dropdownItems = [
  { key: "english", image: "/us_icon.png", label: "Inglês" },
  { key: "spanish", image: "/sp_icon.png", label: "Espanhol" },
  { key: "portuguese", image: "/pt_icon.png", label: "Português" },
];
