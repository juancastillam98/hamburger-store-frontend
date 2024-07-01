"use client";
import { Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";


const testimonials = [
    {
        name: "Agueda Mª F",
        review: "La atención recibida por parte de los trabajadores, la comida y el ambiente impecable, los dichos de Roberto Carlo claves, como : más rico que levantarse tarde, y si sobra cena.... ¡el diseño de la bolsa con Mcpato es inmejorable!",
        rate: 5
    },
    {
        name: "David S",
        review: "El servicio ha sido muy bueno y el personal también, aprecio el trato que Roberto Carlos nos ha dado, mucha profesionalidad y el toque de humor necesario para hacer la experiencia más amena!!",
        rate: 5
    },
    {
        name: "María Luisa",
        review: "La mejor hamburguesería en la que he comido. Fuimos con nuestras hijas de 10 y 13 años, se pudieron hacer su propia hamburguesa y quedaron encantadas. Repetiremos cada vez que volvamos a Málaga.",
        rate: 5
    },
    {
        name: "Laura M",
        review: "El servicio de 10/10, sobre todo un camarero llamado Félix mu majo y la comida muy buena la verdad ⭐️⭐️⭐️⭐️⭐️",
        rate: 5
    },
    {
        name: "Álvaro M",
        review: "Tanto las carnes como hambur están muy ricas, la verdad que es buen sitio para comer. La única cosa a mejorar es cuando está muy lleno (como casi cualquier restaurante) se nota más de lo normal.",
        rate: 4
    },
    // Añade más testimonios según sea necesario
];

export const Testimonials = () => {
    return (
        <section className="w-full mt-20 xl:mt-28 xl:mt-32 bg-primary text-text">
            <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:p-10 md:p-12">
                <h2 className="font-raleway text-h2 font-raleway font-bold italic text-start"><span
                    className={"title-shadow"}>NUESTROS</span> CLIENTES</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:space-x-12 mt-12 sm:mt-16 lg:mt-20 xl:mt-24 gap-5">
                    <div className="flex flex-col align-middle w-full md:w-1/3 gap-4 lg:mb-0">
                        <h3 className="text-h3 text-accent font-bold">Opiniones de nuestros clientes</h3>
                        <p className="text-base">
                            Estas son solo algunas de las opiniones que tienen las personas que prueban una de nuestras hamburguesas. No pueden dejar de hablar de la increíble experiencia que han tenido. Cada visita se convierte en un momento memorable, lleno de satisfacción y placer culinario.
                        </p>

                            <button className="font-raleway text-base bg-accent hover:bg-terciary py-3 px-6 border-2 text-primary border-primary border-primary">
                                <Link href="https://www.tripadvisor.es/Restaurant_Review-g187438-d11863097-Reviews-Gottan_Grill_Huelin-Malaga_Costa_del_Sol_Province_of_Malaga_Andalucia.html" passHref>
                                VER REVIEWS
                                </Link>
                            </button>

                    </div>

                    <div className=" w-full md:w-2/3 inset-0 overflow-hidden">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index} className="lg:basis-1/2">
                                        <article className="mx-auto max-w-[400px]] h-ful px-9">
                                            <div className={"w-full h-full bg-secondary flex flex-col gap-3 p-4"}>
                                                <h4 className="text-h4 text-accent text-center">{testimonial.name}</h4>
                                                <p className="text-base">"{testimonial.review}"</p>
                                                <div className={"flex justify-center gap-1"}>
                                                    {Array.from({ length: testimonial.rate }).map((_, i) => (
                                                        <Star key={i} color="#ffdd00" strokeWidth={3} />
                                                    ))}
                                                </div>

                                            </div>

                                        </article>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className={"bg-accent text-primary border-terciary"}/>
                            <CarouselNext className={"bg-accent text-primary border-terciary"} />
                        </Carousel>
                    </div>
                </div>
            </div>

        </section>
    );
};
