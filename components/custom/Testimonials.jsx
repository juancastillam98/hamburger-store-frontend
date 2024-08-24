"use client";
import { Star } from 'lucide-react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

import Link from "next/link";


const testimonials = [
    {
        name: "Agueda M F",
        review: "La atencion recibida por parte de los trabajadores la comida y el ambiente impecable los dichos de Roberto Carlo claves como mas rico que levantarse tarde y si sobra cena el diseno de la bolsa con Mcpato es inmejorable",
        rate: 5
    },
    {
        name: "David S",
        review: "El servicio ha sido muy bueno y el personal tambien aprecio el trato que Roberto Carlos nos ha dado mucha profesionalidad y el toque de humor necesario para hacer la experiencia mas amena",
        rate: 5
    },
    {
        name: "Maria Luisa",
        review: "La mejor hamburgueseria en la que he comido Fuimos con nuestras hijas de 10 y 13 anos se pudieron hacer su propia hamburguesa y quedaron encantadas Repetiremos cada vez que volvamos a Malaga",
        rate: 5
    },
    {
        name: "Laura M",
        review: "El servicio de 10 sobre todo un camarero llamado Felix mu majo y la comida muy buena la verdad",
        rate: 5
    },
    {
        name: "Alvaro M",
        review: "Tanto las carnes como hambur estan muy ricas la verdad que es buen sitio para comer La unica cosa a mejorar es cuando esta muy lleno como casi cualquier restaurante se nota mas de lo normal",
        rate: 4
    },
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
                    <Carousel className="w-full md:w-2/3 pepito rounded-none h-[400px] sm:h-[450px]">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="relative h-full w-full">
                                    <div
                                        className="absolute inset-0 grid h-full w-full place-items-center bg-secondary">
                                        <div className="w-3/4 text-center md:w-2/4">
                                            <Typography
                                                variant="h4"
                                                color="accent"
                                                className="mb-4 text-xl md:text-2xl lg:text-3xl"
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="white"
                                                className="mb-6 opacity-80"
                                            >
                                                "{testimonial.review}"
                                            </Typography>
                                            <div className="flex justify-center gap-1">
                                                {Array.from({length: testimonial.rate}).map((_, i) => (
                                                    <Star key={i} color="#ffdd00" strokeWidth={3}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                </div>
            </div>

        </section>
    );
};
