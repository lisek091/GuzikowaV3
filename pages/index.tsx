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
        <div className="grid grid-flow-col grid-cols-12">
          <div className="hidden sm:block sm:col-span-1 2xl:col-span-2"> XDD</div>
          <div className="col-span-12 sm:col-span-10 2xl:col-span-8">
            <Work/>
            <Description/>
            <ContactInfo/>
            <Dostawcy/>
          </div>
          <div className="hidden sm:block sm:col-span-1 2xl:col-span-2">XDDD</div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
