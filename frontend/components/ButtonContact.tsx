import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link'

const ButtonContact = () => {
    return (
        <Link
            href='https://wa.link/ldnmb5'
            target='_blank'
            className='fixed bottom-6 right-6 lg:hidden p-2 bg-blue-100 rounded-lg shadow-lg z-40'
        >
            <BsWhatsapp
                color='#eeeeee'
                size={24}
            />
        </Link>
    )
}

export default ButtonContact