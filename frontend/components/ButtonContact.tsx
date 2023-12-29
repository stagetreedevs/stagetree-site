import React from 'react'
import { HiAnnotation } from 'react-icons/hi'
import Link from 'next/link'

const ButtonContact = () => {
    return (
        <Link
            href='/'
            target='_blank'
            className='fixed bottom-6 right-6 lg:hidden p-2 bg-blue-100 rounded-lg shadow-lg'
        >
            <HiAnnotation
                color='#eeeeee'
                size={24}
            />
        </Link>
    )
}

export default ButtonContact