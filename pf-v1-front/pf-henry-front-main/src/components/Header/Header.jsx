import { useState, useEffect 
} from "react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/background-pf.png";

export default function Header() {
  const [fallAnimation, setFallAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFallAnimation(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`relative flex flex-col m-auto text-center bg-blackFred-300 w-full xl:h-[850px] sm:h-[800px] md:h-[900px] py-5 text-whiteFred-100 font-impact ${
        fallAnimation ? "animate-fall" : ""
      }`}
    >
      <div className="sm:flex-row md:flex-col lg:flex-col xl:flex-col flex flex-col items-center">
        <img
          className="bg-contain bg-center  md:max-h-[500px] lg:min-w-screen xl:min-w-[auto] sm:h-auto max-w-full lg:block xl:block sm:mt-[200px] md:mt-[200px]"
          alt=""
          src={bg}
        />
        <div className="sm:ml-4 xl:ml-0 md:max-w-[1600px] absolute inset-0">
          <div className="sm:text-center  lg:text-center xl:text-center">
            <div className="sm:mt-[10px] md:text-center md:mt-[10px] lg:text-center lg:mt-[300px] lg:-ml-[900px]   xl:mt-[300px] xl:-ml-[1100px] xl:text-center">
              <p className="sm:text-21xl md:text-31xl xl:text-31xl lg:text-31xl md:my-0 lg:my-0 sm:my-0 xl:my-0 text-whiteFred-100 font-impact">
                BEST
              </p>
              <p className="sm:text-21xl md:text-31xl xl:text-31xl lg:text-31xl md:my-0 lg:my-0 sm:my-0 xl:my-0 text-whiteFred-100 font-impact">
                SUPPLEMENT
              </p>
              <p className="sm:text-21xl md:text-31xl xl:text-31xl lg:text-31xl md:my-0 lg:my-0 sm:my-0 xl:my-0 text-orangeFred-300 font-impact">
                SELLERS
              </p>
            </div>
            <div className="sm:-ml-[300px] md:text-center md:-mt-[10px] md:-ml-[350px] lg:mt-[10px] lg:-ml-[500px] sm:mt-[250px] xl:mt-[100px] xl:-ml-[700px] lg:text-center xl:text-center">
              <p className="sm:text-9xl  xl:text-30xl md:text-30xl lg:text-30xl sm:my-0 md:my-0 lg:my-0 xl:my-0 text-whiteFred-100 font-impact">
                YOUR
              </p>
              <p className="sm:text-9xl md:text-30xl xl:text-30xl lg:text-30xl md:my-0 sm:my-0 lg:my-0 xl:my-0 text-orangeFred-300 font-impact">
                NUTRITION
              </p>
              <p className="sm:text-9xl md:text-30xl xl:text-30xl lg:text-30xl md:my-0 sm:my-0 lg:my-0 xl:my-0 text-whiteFred-100 font-impact">
                FOREVER
              </p>
            </div>
            <div className="sm:ml-[230px] md:text-center lg:text-center sm:-mt-[100px] md:-mt-[150px] md:ml-[300px] lg:-mt-[620px] lg:ml-[450px] xl:-mt-[720px] xl:ml-[400px] xl:text-center">
              <p className="sm:text-9xl md:text-30xl xl:text-30xl lg:text-30xl md:my-0 sm:my-0 lg:my-0 xl:my-0 text-whiteFred-100 font-impact">
                ONLINE
              </p>
              <p className="sm:text-9xl md:text-30xl xl:text-30xl lg:text-30xl md:my-0 sm:my-0 lg:my-0 xl:my-0 text-orangeFred-300 font-impact">
                SUPPLEMENTS
              </p>
              <p className="sm:text-9xl md:text-30xl xl:text-30xl lg:text-30xl md:my-0 sm:my-0 lg:my-0 xl:my-0 text-whiteFred-100 font-impact">
                STORE
              </p>
            </div>
          </div>
          <NavLink to="/products">
            <button className="bg-redFred-300 font-impact sm:text-[25px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] md:w-[300px] w-full sm:w-[250px] lg:w-[300px] lg:mt-[300px] lg:ml-[700px] xl:w-[300px] h-16 mt-6 sm:mt-[100px] xl:ml-[900px] xl:text-21xl md:mt-[400px] xl:mt-[300px] lg:text-30xl md:text-30xl mx-auto">
              <p className="xl:-mt-[20px] lg:-mt-[5px] md:-mt-[5px]  sm:-mt-[2px]">
                shop now
              </p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
