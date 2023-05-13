import ServiceCard from "./ServiceCard"

const Work = () =>{
    return (
    <div className="dark:text-white">
        <div className="flex justify-between">
            <div className="hidden md:block w-36 lg:w-96"></div>
            <div className=''>
                <h1 className="text-2xl text-center font-semibold text-blue-900 dark:text-blue-700 mb-2">Usługi</h1>
                <p className="mx-4">Oferujemy szeroki zakres usług związanych z montażem okien.
                Nasz zespół jest w stanie zamontować okna w każdym rodzaju budynku, bez względu na jego wielkość i rodzaj.
                Dbamy o to, aby montaż był przeprowadzony zgodnie z najwyższymi standardami, co gwarantuje nie tylko estetyczny wygląd, ale także wysoką izolacyjność termiczną i akustyczną.
                Nasze usługi obejmują również demontaż starych okien oraz transport i utylizację odpadów.
                </p>
            </div>
            <div className="hidden md:block w-36 lg:w-96"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            <ServiceCard Przycisk="Okna aluminiowe" Background="cardBackground2" Tytul="Okna aluminiowe" Opis="Są bardzo wytrzymałe i odporne na uszkodzenia mechaniczne oraz warunki atmosferyczne, takie jak wiatr, deszcz czy słońce."/>
            <ServiceCard Przycisk="Okna PCV" Background="cardBackground1" Tytul="Okna PCV" Opis="Posiadają dobrą izolacyjność termiczną i akustyczną, co wpływa na zmniejszenie kosztów ogrzewania oraz zapewnia cichsze warunki wewnątrz budy"/>
            <ServiceCard Przycisk="Usługi" Background="cardBackground1" Tytul="Usługi" Opis="Zamówienie naszych usług montażowych jest bardzo proste. Wystarczy skontaktować się z nami za pomocą formularza kontaktowego na naszej stronie internetowej lub telefonicznie."/>
        </div>
    </div>
    )
}
export default Work