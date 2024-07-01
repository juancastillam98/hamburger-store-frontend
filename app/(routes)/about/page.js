export default function About(){
    return (
        <section className="w-full mt-20 xl:mt-28 xl:mt-32 bg-primary text-text">
            <div className="max-w-screen-2xl mx-auto px-4 sm:p-6 md:p-8">
                <h2 className="text-4xl font-bold text-center text-accent mb-8">Nuestra Historia</h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                    <div className="w-full lg:w-1/2">
                        <p className="text-lg mb-6">
                            Desde nuestro inicio, nos hemos dedicado a crear hamburguesas gourmet con ingredientes
                            frescos y de la mejor calidad.
                            Creemos en la pasión por la cocina y en ofrecer una experiencia gastronómica única a cada
                            uno de nuestros clientes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-2">Nuestros Valores</h3>
                                <p className="text-base">
                                    Calidad, frescura y pasión son los pilares de nuestra cocina. Nos aseguramos de que
                                    cada hamburguesa sea una obra maestra.
                                </p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-2">El Equipo</h3>
                                <p className="text-base">
                                    Nuestro equipo está compuesto por amantes de la buena comida, dedicados a brindar el
                                    mejor servicio y sabor.
                                </p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-2">Calidad Garantizada</h3>
                                <p className="text-base">
                                    Seleccionamos los mejores ingredientes para asegurar que cada mordida sea una
                                    explosión de sabor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
                        <img src="tu-imagen-1.jpg" alt="Equipo" className="rounded-lg shadow-lg mb-4"/>
                        <img src="tu-imagen-2.jpg" alt="Local" className="rounded-lg shadow-lg mb-4"/>
                        <img src="tu-imagen-3.jpg" alt="Preparación" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </section>

    )
}