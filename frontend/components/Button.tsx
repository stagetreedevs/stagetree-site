import { HiOutlineArrowNarrowRight } from 
"react-icons/hi";
import Link from 'next/link'

type ButtonProps = {
    title: string;
    link: string;
}

const Button = ({title, link}: ButtonProps) => {


    return (
        <Link
            href={link}
            target='_blank'
            className="bg-green-100 flex flexCenter px-4 py-3 rounded-lg text-blue-100 hover:text-white-50 cursor-pointer hover:bg-blue-100 transition-all shadow-lg"
        >
            <label className="mr-2 bold-16 cursor-pointer ">{title}</label>
            <HiOutlineArrowNarrowRight
                size='20'
            />
        </Link>
    )
}

export default Button