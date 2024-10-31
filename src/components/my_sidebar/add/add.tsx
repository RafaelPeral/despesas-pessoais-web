import { PlusSquareIcon } from "lucide-react"
import { useItem } from '@/hooks/app';
import { AddProps } from "@/types/my_sidebar/add/add_props";

export default function Add({ children, add }: AddProps) {
    const { addItem } = useItem()

    return (
        <div 
            onClick={() => addItem(add)}
            className='flex items-center gap-2 cursor-pointer p-2 text-sm'
        >
            <PlusSquareIcon size={30} className="min-w-5 max-w-5"/>
            { children }
        </div>
    )
}
