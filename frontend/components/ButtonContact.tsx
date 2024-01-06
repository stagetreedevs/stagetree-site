import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link'

const ButtonContact = () => {
    return (
        <Link
            href='https://wa.link/ldnmb5'
            target='_blank'
            className='fixed bottom-6 right-6 p-2 bg-green-100 hover:bg-blue-100 rounded-lg shadow-lg z-40 transition-all'
        >
            <BsWhatsapp
                color='#eeeeee'
                size={32}
                className='hidden lg:block'
            />
            <BsWhatsapp
                color='#eeeeee'
                size={24}
                className='block lg:hidden'
            />
        </Link>
    )
}

export default ButtonContact