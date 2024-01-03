import { HiOutlineArrowNarrowRight } from 
"react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'Annotation' | 'Arrow';
}

const Button = ({ type, title, variant }: ButtonProps) => {

    const Icon = variant === 'Annotation' ? BsWhatsapp : HiOutlineArrowNarrowRight;

    return (
        <Link
            href='https://wa.link/ldnmb5'
            target='_blank'
            className="bg-green-100 flex flexCenter px-4 py-3 rounded-lg text-white-90 cursor-pointer hover:bg-blue-100 transition-all shadow-lg"
            type={type}
        >
            <label className="mr-2 bold-16 cursor-pointer ">{title}</label>
            <Icon
                size='20'
            />
        </Link>
    )
}

export default Button