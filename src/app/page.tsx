
import Header from "@/components/header";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Ceramics from "@/components/ceramics";
import Product from "@/components/product";
import Service from "@/components/service";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="p-14">
      <Header/>
      < Herosection/>
      < Ceramics/>
      < Services/>
      < Service/>
      < Product/>
     < Footer/> 
    </div>
  );
}
