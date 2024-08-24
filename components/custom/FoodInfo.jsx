
import {FoodInfoDetail} from "@/components/custom/FoodInfoDetail";
import {useState} from "react";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
export const FoodInfo = ({product}) => {
    function generateId() {
        return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (

        <article
            className={"h-full w-full flex items-end hover:scale-105 transition-transform h-52 hover:cursor-pointer"}
            style={{
                backgroundImage: `url(${product?.attributes?.picture?.data[0]?.attributes?.formats?.small?.url || '/default-image.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            onClick={handleOpen}
        >
            <div className="bg-secondary/[.5] backdrop-blur-md px-2 py-3 w-full flex flex-col items-start gap-[5px]">
                <h4 className="text-h4 font-barlow text-text leading-5">{product?.attributes.name}</h4>
                <p className="text-sm sm:text-sm font-raleway whitespace-nowrap overflow-hidden text-ellipsis text-text"
                   style={{maxWidth: "100%"}}>
                    {product?.attributes.description}
                </p>
                <p className="text-sm sm:text-sm md:text-base font-raleway whitespace-nowrap overflow-hidden text-ellipsis text-text font-semibold">
                    {product?.attributes.sell_price}€
                </p>
                <Dialog open={open} handler={handleOpen} size="xs" className="bg-secondary rounded-none">
                    <FoodInfoDetail key={generateId()} product={product}/>
                </Dialog>
            </div>
        </article>

)
}