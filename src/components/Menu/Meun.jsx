import Image from "next/image"
import { useState } from "react"

export default function Menu(){
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <Image src="" 
            alt="open" 
            width={25} 
            height={25}
            className="cursor-pointer"
            />
        </div>
    )
}