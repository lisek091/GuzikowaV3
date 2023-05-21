import ServiceCard from "./ServiceCard"

const Work = () =>{
    return (
    <div className="">
        <div className="flex justify-between">
            <div className="hidden md:block w-36 lg:w-96"></div>
            <div className=''>
                <h1 className="text-2xl text-center font-semibold text-orange-700  mb-2">Usługi</h1>
                <p className="mx-4">Oferujemy szeroki zakres usług związanych z montażem okien.
                Nasz zespół jest w stanie zamontować okna w każdym rodzaju budynku, bez względu na jego wielkość i rodzaj.
                Dbamy o to, aby montaż był przeprowadzony zgodnie z najwyższymi standardami, co gwarantuje nie tylko estetyczny wygląd, ale także wysoką izolacyjność termiczną i akustyczną.
                Nasze usługi obejmują również demontaż starych okien oraz transport i utylizację odpadów.
                </p>
            </div>
            <div className="hidden md:block w-36 lg:w-96"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center">
            <ServiceCard link={"./oferta/okna"} Przycisk="Okna" Background="cardBackground2" Tytul="Okna" Opis="Są bardzo wytrzymałe i odporne na uszkodzenia mechaniczne oraz warunki atmosferyczne, takie jak wiatr, deszcz czy słońce."/>
            <ServiceCard link={"./oferta/uslugibudowlane"} Przycisk="Usługi budowlane" Background="serviceCard2" Tytul="Usługi budowlane" Opis="Zamówienie naszych usług montażowych jest bardzo proste. Wystarczy skontaktować się z nami za pomocą formularza kontaktowego na naszej stronie internetowej lub telefonicznie."/>
            <ServiceCard link={"./oferta/systemy"} Przycisk="Systemy przesuwne" Background="serviceCard1" Tytul="Systemy przesuwne" Opis="Najwyższej jakościu produkty. Więcej informacji wkrótce."/>
            <ServiceCard link={"./oferta/uslugi"} Przycisk="Ochrona przeciwsłoneczna" Background="serviceCard3" Tytul="Ochrona przeciwsłoneczna" Opis="Najwyższej jakościu produkty. Więcej informacji wkrótce."/>
        </div>
    </div>
    )
}
export default Work