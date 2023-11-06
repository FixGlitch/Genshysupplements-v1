import { useContext } from "react"
import SPAM1 from "../../assets/SPAM1.png"
import SPAM2 from "../../assets/SPAM2.png"
import SPAM3 from "../../assets/SPAM3.png"
import { NavLink } from "react-router-dom"
import { FiltersContext } from "../../context/filter"

export default function Hero() {
    const { filters, setFilters } = useContext(FiltersContext)

    const shopHero = (category) => {
        setFilters({
            orderBy: "", diet: "", flavor: "", weightType: "", weightMin: "", weightMax: "", page: 1, name: "", priceMin: "", priceMax: "", category: category, active: true
        })
    }
    
  return (
    <div className="flex justify-center items-center">
      <section className="flex sm:flex-wrap md:flex-wrap max-w-full bg-whiteFred-100 xl:w-[auto] md:max-w-[300px] xl:h-[960px] items-center">
        <NavLink to="/products" onClick={() => shopHero('Food')} className="sm:py-5 sm:my-2 md:ml-[20px] sm:mx-auto md:mx-auto md:my-[20px] lg:my-[20px] mx-[30px] transition transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[350px] xl:w-[540px] xl:h-[630px] xl:max-w-[400px]">
          <img src={SPAM1} alt="" className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] w-[400px] h-[480px]" />
          <p className="font-roboto-bold text-30xl text-blackFred-100 mb-0">SNAKS</p>
          <p to="/products" className="font-bayon-bold leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</p>
        </NavLink>
        <NavLink to="/products" onClick={() => shopHero("Vitamins and Minerals")} className="sm:py-5 sm:my-2 md:ml-[20px] sm:mx-auto md:mx-auto md:my-[20px] lg:my-[20px] mx-[30px] transition transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[355px] xl:w-[540px] xl:h-[630px] xl:max-w-[400px]">
          <img src={SPAM2} alt="" className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] w-[400px] h-[480px]" />
          <p className="font-roboto-bold text-30xl text-blackFred-100 mb-0">SUPPLEMENTS</p>
          <p to="/products" className="font-bayon-bold leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</p>
        </NavLink>
        <NavLink to="/products" onClick={() => shopHero("Vitamins and Minerals")} className="sm:py-5 sm:my-2 md:ml-[20px] sm:mx-auto md:mx-auto md:my-[20px] lg:my-[20px] mx-[30px] transition transform hoverscale-110 rounded-lg bg-graym sm:w-[270px] sm:h-[355px] xl:w-[540px] xl:h-[630px] xl:max-w-[400px]">
          <img src={SPAM3} alt="" className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] w-[400px] h-[480px]" /><br />
          <p className="font-roboto-bold text-30xl text-blackFred-100 mb-0 ">VITAMINS</p>
          <p to="/products" className="font-bayon-bold leading-[32px] text-orangeFred-300 hover:text-redFred-300">SHOP NOW</p>
        </NavLink>
      </section>
    </div>
  );  
}
