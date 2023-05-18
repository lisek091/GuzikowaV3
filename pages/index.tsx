import ContactInfo from "@/components/ContactInfo";
import Description from "@/components/Description";
import Dostawcy from "@/components/Dostawcy";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/pagination/Card";

export default function Home() {
  return (
    <div >
      <div className="bg-slate-100 dark:bg-zinc-900">
        <Navbar/>
        <div className="text-white dark:text-black">.</div>
        <div className="mt-20 flex justify-center text-lg">Strona w przebudowie - zapraszamy wkrótce</div>
        <Card/>
        <Description/>
        <Work/>
        <ContactInfo/>
        <Dostawcy/>
        <Footer/>
      </div>
    </div>
  )
}
//className={theme ? "dark" : ''}