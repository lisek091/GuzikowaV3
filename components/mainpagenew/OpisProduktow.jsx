import React from 'react'
import Link from 'next/link'
const OpisProduktow = () => {
  return (
    <>
    <section className="py-20">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Dziesiątki modeli do wyboru
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Okna aluminiowe najwyższej klasy
                        </h2>
                        <p>
                            Wytrzymałe i odporne na uszkodzenia mechaniczne oraz warunki atmosferyczne.Posiadają nowoczesny i estetyczny wygląd, co sprawia, że są często wykorzystywane w nowoczesnej architekturze.
                            Charakteryzują się wysoką izolacyjnością termiczną i akustyczną, co pozwala na zmniejszenie kosztów związanych z ogrzewaniem oraz zapewnia komfortowe warunki wewnątrz budynku.

                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Nasza oferta
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                            />
                    </div>
                </div>
        </section>
        <section className="py-10">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Niski koszt, szybka realizacja
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Okna plastikowe
                        </h2>
                        <p>
                            Są stosunkowo tańsze niż okna aluminiowe i wykonane z materiału, który jest łatwy w produkcji.
                            Charakteryzują się wysoką trwałością i odpornością na warunki atmosferyczne, co sprawia, że są wytrzymałe i nie wymagają częstej konserwacji.
                            Mogą być wyposażone w różnego rodzaju dodatkowe elementy, takie jak rolety, moskitiery, czy wentylatory, co zwiększa ich funkcjonalność.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="/oferta/systemy" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Nasza oferta
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className=" md:rounded-tr-[108px]"
                            alt=""
                            />
                    </div>
                </div>
        </section>
        </>
  )
}

export default OpisProduktow