import ContactInfo from "@/components/mainpage/ContactInfo";
import Description from "@/components/mainpage/Description";
import Dostawcy from "@/components/mainpage/Dostawcy";
import Footer from "@/components/mainpage/Footer";
import Work from "@/components/mainpage/Work";
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
