import ContactInfo from "@/components/ContactInfo";
import Description from "@/components/Description";
import Dostawcy from "@/components/Dostawcy";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Nav from "@/components/noweWersje/nav/Nav";
export default function Home() {
  return (
    <div >
      <div className="backgroundcoloraa">
        <Nav/>
        <div className="text-white mb-16">.</div>
        <Work/>
        <Description/>
        <ContactInfo/>
        <Dostawcy/>
        <Footer/>
      </div>
    </div>
  )
}
