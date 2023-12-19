import { HiAnnotation, HiOutlineArrowNarrowRight } from "react-icons/hi";

type NewButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'Annotation' | 'Arrow';
    full?: boolean;
}

const NewButton = ({ type, title, variant, full } : NewButtonProps) => {
    const Icon = variant === 'Annotation' ? HiAnnotation : HiOutlineArrowNarrowRight;

    return (
        <button
            className="flexCenter gap-3 rounded-[8px] border bg-green-90 text-white-90 px-4 py-3 shadow"
            type={type}
        >
            <label className="text-button whitespace-nowrap cursor-pointer">{title}</label>
            <Icon 
                size='18'
            />
        </button>
    )
}

export default NewButton
