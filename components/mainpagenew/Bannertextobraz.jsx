import Link from 'next/link'
import React from 'react'

const Bannertextobraz = () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                            M&Dgroup
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Pomożemy Ci stworzyć własną przestrzeń
                        </p>
                        <p className="mt-3 text-gray-600">
                        Jesteśmy firmą z wieloletnim doświadczeniem samodzielnie produkującą okna w standardzie PREMIUM i wykonującą wszystkie zlecenia montażu okien według indywidualnych potrzeb Klientów. Produkcja okien oraz ich montaż realizowany jest przez zgraną grupę specjalistów i montażystów, którzy doskonale wiedzą, jak ważne są szczegóły i precyzja przy wykonywaniu wszystkich zleceń, aby montaż przebiegł zgodnie ze standardami oraz oczekiwaniami naszych Klientów. Zachęcamy do zapoznania się z naszą ofertą i proponowanymi rozwiązaniami, a następnie kontakt w celu skorzystania z naszych usług
                        </p>
                        <Link href="/Kontakt" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                            Dowiedz się więcej
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bannertextobraz