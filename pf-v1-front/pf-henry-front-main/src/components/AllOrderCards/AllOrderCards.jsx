import axios from 'axios';

export default function AllOrdersCards({id,total,date,status}) {
  const URLBASE = import.meta.env.VITE_URL_BASE;

  const handleClick = async (id) => {
    try {
    const { data } = await axios.post(
      `${URLBASE}/payment/update/session`, {id})
      window.open(data, "_self");
      dispatch(loadCart({}))
  } catch (error) {
      console.error("Error al realizar la solicitud:", error);
  }
  };

    return (
        <div className="flex justify-evenly p-4">
        <span className="w-full flex justify-between items-center">
          <span className="grid justify-start text-center	 text-whiteFred-100">
            <h4 className="text-black  m-0">Order Id</h4>
                <p className="text-black m-0">{id}</p>
                <div className="flex justify-between">
                <h4 className="text-black m-0">Total</h4>
                <p className="text-black m-0"> $ {total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                <h4 className="text-black m-0">Date</h4>
                <p className="text-black m-0">{date}</p>
                </div>
                <div className="flex justify-between">
                <h4 className="text-black m-0">Status</h4>
                <span className={`text-center inline-block leading-[0.4rem] px-4 py-2 bg-blue-500 text-white uppercase whitespace-nowrap rounded text-sm ${status == 'COMPLETE' ? 'bg-green-400 ' : 'bg-red-500'} `}>{status.toUpperCase(0)}</span>
                </div>

                <div className="flex justify-end">
                  {status == 'COMPLETE'?
                  (
                    <a className="text-blackFred-300 hover:text-orangeFred-300 cursor-pointer" href={`/myaccount/orders/?id=${id}`} >View</a>
                  ) :
                    <button type="button" className="mt-2 font-bebas py-[8px] px-[24px] rounded-sm bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent" onClick={() => handleClick(id)} >Checkout</button>
                  } 

                </div>


          </span>
          </span>
      </div>
    )
}