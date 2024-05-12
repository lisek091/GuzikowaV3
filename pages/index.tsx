import ContactInfo from "@/components/mainpage/ContactInfo";
import Description from "@/components/mainpage/Description";
import Dostawcy from "@/components/mainpage/Dostawcy";
import Footer from "@/components/mainpage/Footer";
import Nav from "@/components/noweWersje/nav/Nav";
import PrezentacjaAluminiowe from "@/components/noweWersje/strony/PrezentacjaAluminiowe"; 
import ProductDesc from "@/components/noweWersje/strony/ProductDesc";
import Bannertextobraz from "@/components/mainpagenew/Bannertextobraz"
import OpisProduktow from "@/components/mainpagenew/OpisProduktow"
import Banerkontakt from "@/components/mainpagenew/Banerkontakt";

export default function Home() {

  return (
    <div >
      <div className=""> 
        <Nav/>
        <Bannertextobraz/>
        <OpisProduktow/>
        <Banerkontakt/>
        <Dostawcy/>
        <Footer/>
      </div>
    </div>
  )
}
