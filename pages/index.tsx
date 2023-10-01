import ContactInfo from "@/components/mainpage/ContactInfo";
import Description from "@/components/mainpage/Description";
import Dostawcy from "@/components/mainpage/Dostawcy";
import Footer from "@/components/mainpage/Footer";
import Work from "@/components/mainpage/Work";
import Nav from "@/components/noweWersje/nav/Nav";
import ProductDesc from "@/components/noweWersje/strony/ProductDesc";
export default function Home() {
  const imageUrl1 = "/P1080114.JPG"
  const imageUrl2 = "/wallpapper3.jpg"
  return (
    <div >
      <div className="">
        <Nav/>
        <div className="mt-16"></div>
        <ProductDesc 
          buttonText="Dowiedz się więcej"
          image={imageUrl1}
          link="/oferta/okna" 
          text="Nowoczesny design i wytrzymałość: Okna aluminiowe to synonim elegancji i trwałości.
          Ich lekka konstrukcja pozwala na tworzenie dużych przeszkleń, co wprowadza do wnętrza więcej naturalnego światła i przestrzeni.
          Nasze okna aluminiowe wyróżniają się minimalistycznym designem, który pasuje zarówno do nowoczesnych, jak i klasycznych wnętrz." 
          title="Okna aluminiowe"
        />
        <ProductDesc 
          buttonText="Okna PCV"
          image={imageUrl2}
          link="/oferta/systemy" 
          text="Trwałość i łatwość pielęgnacji: Nasze okna PCV charakteryzują się długą żywotnością oraz prostotą w utrzymaniu czystości.
          Dzięki wykorzystaniu wysokiej jakości materiałów, nie musisz martwić się o rdzę ani malowanie. 
          To idealne rozwiązanie dla tych, którzy cenią sobie wygodę i niezawodność." 
          title="Okna PCV"
        />
          <Description/>
          <ContactInfo/>
          <Dostawcy/>
        <Footer/>
      </div>
    </div>
  )
}
