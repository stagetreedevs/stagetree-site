import { HiAnnotation, HiOutlineArrowNarrowRight } from "react-icons/hi";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'Annotation' | 'Arrow';
}

const Button = ({ type, title, variant } : ButtonProps) => {
    
    const Icon = variant === 'Annotation' ? HiAnnotation : HiOutlineArrowNarrowRight;

    return (
        <button
            className="bg-green-100 flex flexCenter px-4 py-3 rounded-lg text-white-90 cursor-pointer hover:opacity-90"
            type={type}
        >
            <label className="mr-2 bold-16 cursor-pointer ">{title}</label>
            <Icon 
                size='18'
            />
        </button>
    )
}

export default Button