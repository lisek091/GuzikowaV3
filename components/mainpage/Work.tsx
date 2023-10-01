import ServiceCard from "./ServiceCard"

const Work = () =>{
    return (
        <div className="grid grid-cols-1 place-items-center">
            <ServiceCard link={"./oferta/okna"} Przycisk="Okna aluminiowe" Background="serviceCard1" Tytul="Okna aluminiowe" Opis="Nowoczesny design i wytrzymałość: Okna aluminiowe to synonim elegancji i trwałości. Ich lekka konstrukcja pozwala na tworzenie dużych przeszkleń, co wprowadza do wnętrza więcej naturalnego światła i przestrzeni. Nasze okna aluminiowe wyróżniają się minimalistycznym designem, który pasuje zarówno do nowoczesnych, jak i klasycznych wnętrz."/>
            <ServiceCard link={"./oferta/systemy"} Przycisk="Okna PCV" Background="serviceCard3" Tytul="Okna PCV" Opis="Trwałość i łatwość pielęgnacji: Nasze okna PCV charakteryzują się długą żywotnością oraz prostotą w utrzymaniu czystości. Dzięki wykorzystaniu wysokiej jakości materiałów, nie musisz martwić się o rdzę ani malowanie. To idealne rozwiązanie dla tych, którzy cenią sobie wygodę i niezawodność."/>
           
        </div>
    )
}
export default Work

/*
 <ServiceCard link={"./oferta/systemy"} Przycisk="Systemy przesuwne" Background="serviceCard3" Tytul="Systemy przesuwne" Opis="Najwyższej jakości produkty. Więcej informacji wkrótce."/>
            <ServiceCard link={"./oferta/uslugi"} Przycisk="Ochrona przeciwsłoneczna" Background="serviceCard2" Tytul="Ochrona przeciwsłoneczna" Opis="Najwyższej jakościu produkty. Więcej informacji wkrótce."/>
*/