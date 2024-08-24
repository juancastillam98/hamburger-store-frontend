
import { X } from 'lucide-react';
export const FoodInfoDetail = ({ product }) => {
    return (
            <article
                className="relative flex flex-col mt-6 bg-secondary shadow-md w-full">
                <figure
                    className="relative h-56 mx-4 overflow-hidden text-white shadow-lg  shadow-terciary-500/40">
                    <img
                        src={product?.attributes?.picture?.data[0]?.attributes?.formats?.small?.url || '/default-image.png'}
                        alt={product?.attributes.name || "Food Image"}
                        className="object-cover w-full h-full"
                    />
                </figure>
                <div className="p-6">
                    <h3 className="text-h3 text-accent font-bold">
                        {product?.attributes.name}
                    </h3>
                    <p className="text-base font-raleway mb-4 text-text">
                        {product?.attributes.description}
                    </p>
                </div>
                <footer className="p-6 pt-0 flex justify-between items-center">
                    <button
                        className="align-middle select-none text-primary text-h4 bg-accent px-4 py-2 font-barlow font-bold"
                        type="button">
                        <span className={"whitespace-nowrap"}> {product?.attributes.sell_price} € </span>
                    </button>
                    <button data-ripple-dark="true" data-dialog-close="true"
                            className="bg-accent px-4 py-2">
                        <X className={"text-primary w-8 h-8 "}/>
                    </button>
                </footer>
            </article>
    );
};