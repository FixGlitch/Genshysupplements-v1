import Logo from '../../assets/Logo(1).png';

export default function Loader(){
    return(
        <div>
            <div className="flex justify-center items-center h-[1000px]">
            <img src={Logo} alt="" className="absolute mb-[120px] mx-0 ml-auto flex"  />
            <div className="w-4 h-4 rounded-full ml-1 bg-redFred-100 animate-bounce" style={{animationDelay: '.7s'}}></div>
            <div className="w-4 h-4 rounded-full ml-1 bg-redFred-100 animate-bounce" style={{animationDelay: '.3s'}}></div>
            <div className="w-4 h-4 rounded-full ml-1 bg-redFred-100 animate-bounce" style={{animationDelay: '.7s'}}></div>
            </div>
        </div>
    )
}