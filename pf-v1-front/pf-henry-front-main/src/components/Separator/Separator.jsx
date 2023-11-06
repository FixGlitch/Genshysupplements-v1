import Logo from "../../assets/Logo(2).png";

export default function Separator() {
  return (
    <div className="flex flex-col items-center justify-center bg-redFred-100 h-30 text-left text-[24px] text-black font-bayon">
      <img className="m-0 mt-[12px]  w-[80px] h-[auto]" alt="" src={Logo} />
      <p className="m-0 -mt-3 font-bayon">genshysuplements</p>
      <p className="ml-[200px] -mt-[50px]">©</p>
    </div>
  );
}
