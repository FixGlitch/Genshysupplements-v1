import Carousel from "../../components/Carrousel/Carrousel";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header"
import Separator from "../../components/Separator/Separator";

export default function Home () {
    
    return(
        <div>
            <Header/>
            <Separator/>
            <Hero />
            <Separator/>
            <Carousel/>
        </div>
    )
}