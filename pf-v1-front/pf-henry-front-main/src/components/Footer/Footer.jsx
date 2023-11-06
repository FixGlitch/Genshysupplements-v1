import logo from "../../assets/Logo(1).png";
import git from "../../assets/github.svg"
import linke from "../../assets/linkedin.svg"

export function Footer() {
    return (
        <div className="flex flex-row flex-wrap">
            <div className="flex flex-row flex-1 justify-around"> 
                <div className="">
                    <p className="font-impact  leading-[32px] text-orangeFred-300">DEVELOPERS</p>
                    <div className="flex flex-row justify-around">
                    <div>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Guillermo Rojas</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Maximiliano Cerra</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Julian Belmartino</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Leonel Pogonza</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Sofia Blanc</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Juan Ubaldi</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Mateo Ossorio</p>
                        <p className="hover:text-redFred-100 m-1 font-inter text-left text-blackFred-100 cursor-pointer"><img src={linke} className="mr-2" />Lucas Blanco</p> 
                    </div>
                    </div>
                </div>
                <div className="">
                    <p className="font-impact  leading-[32px] text-orangeFred-300">LINKS</p>
                    <p className="font-inter">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/home">Home</a>
                    </p>
                    <p className="font-inter">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/products">Products</a>
                    </p>
                    <p className="font-inter">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="">Pay method</a>
                    </p>
                    <p className="font-inter">
                        <a className="text-blackFred-300 hover:text-orangeFred-300" href="/aboutus">About us</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div>
                    <img className=""   alt=""  src={logo}/>
                </div>
                <div>
                    <div className="relative leading-[32px] text-blackFred-100">
                        <p className="font-impact">©2023 GENSHYSUPLEMENTS. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div>
                    <div>
                        <p className="font-impact  leading-[32px] text-orangeFred-300">NEWSLETTER</p>
                    </div>
                    <div className="flex justify-around">
                        <input className="relative sm:w-[300px] md:w-[500px]  bg-whiteFred-100 py-[8.5px] px-[5px] font-bebas xl:w-[400px] rounded-sm max-w-[250px] mt-6" placeholder="E-MAIL"/>
                        <button className="relative bg-redFred-300 text-blackFred-300 py-[8px] px-[28px] font-bebas rounded-sm mt-6">submit</button>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-around">
                        <a href="https://github.com/WVallejos" className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/cerramaximiliano" className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/JulianBelmartino" className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/JuanLeonelPogonza" className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                    </div>
                    <div className="flex justify-around mb-[10px]">
                        <a href="https://github.com/BlancSofia27" className="relative mt-2 rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/JuanUbaldi      " className="relative mt-2 rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/mateoOA" className="relative mt-2 rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                        <a href="https://github.com/FixGlitch" className="relative mt-2 rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" ><img src={git} className="mt-2"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};