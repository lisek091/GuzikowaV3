import ContactInfo from "@/components/mainpage/ContactInfo";
import Description from "@/components/mainpage/Description";
import Dostawcy from "@/components/mainpage/Dostawcy";
import Footer from "@/components/mainpage/Footer";
import Nav from "@/components/noweWersje/nav/Nav";
import PrezentacjaAluminiowe from "@/components/noweWersje/strony/PrezentacjaAluminiowe"; 
import ProductDesc from "@/components/noweWersje/strony/ProductDesc";
import Bannertextobraz from "@/components/mainpagenew/Bannertextobraz"



export default function Home() {

  return (
    <div >
      <div className="">
        <Nav/>
        <Bannertextobraz/>
        <ProductDesc 
          buttonText="Okna PCV"
          image={"/wallpapper3.jpg"}
          link="/oferta/systemy" 
          text="Trwałość i łatwość pielęgnacji: Nasze okna PCV charakteryzują się długą żywotnością oraz prostotą w utrzymaniu czystości.
          Dzięki wykorzystaniu wysokiej jakości materiałów, nie musisz martwić się o rdzę ani malowanie. 
          To idealne rozwiązanie dla tych, którzy cenią sobie wygodę i niezawodność." 
          title="Okna PCV"
        />
          <ContactInfo/>
          <Dostawcy/>
        <Footer/>
      </div>
    </div>
  )
}
