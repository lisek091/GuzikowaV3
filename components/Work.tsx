import ServiceCard from "./ServiceCard"

const Work = () =>{
    return (
    <div className="mt-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center">
            <ServiceCard link={"./oferta/okna"} Przycisk="Okna" Background="serviceCard1" Tytul="Okna" Opis="Są bardzo wytrzymałe i odporne na uszkodzenia mechaniczne oraz warunki atmosferyczne."/>
            <ServiceCard link={"./oferta/uslugibudowlane"} Przycisk="Usługi budowlane" Background="cardBackground2" Tytul="Usługi budowlane" Opis="Zamówienie naszych usług montażowych jest bardzo proste i szybkie. Przekonaj się sam!"/>
            <ServiceCard link={"./oferta/systemy"} Przycisk="Systemy przesuwne" Background="serviceCard3" Tytul="Systemy przesuwne" Opis="Najwyższej jakości produkty. Więcej informacji wkrótce."/>
            <ServiceCard link={"./oferta/uslugi"} Przycisk="Ochrona przeciwsłoneczna" Background="serviceCard2" Tytul="Ochrona przeciwsłoneczna" Opis="Najwyższej jakościu produkty. Więcej informacji wkrótce."/>
        </div>
    </div>
    )
}
export default Work