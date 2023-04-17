import {AiOutlineArrowLeft} from 'react-icons/ai'

const Card = () =>{
    return(
        <div className="flex flex-row justify-between" style={{height:"580px"}}>
            <div id="left" className="hidden sm:flex sm:w-1/12 items-center justify-start"></div>
            <div id='center' className="w-full cardBackground1">
                <div className="absolute mt-52 opacity-50 z-10 hover:opacity-80 hover:cursor-pointer">
                    <div className="bg-white h-16 w-16 rounded-full items-center justify-start flex flex-row hidden">
                        <AiOutlineArrowLeft size={50} style={{marginLeft:"4px"}}/>
                    </div>
                </div>
                <div className="h-3/5 sm:h-2/5"></div>
                <div className="h-2/5 sm:h-3/5 sm:w-1/2 sm:ml-12 lg:w-1/3 lg:ml-20 bg-zinc-800 opacity-90 text-yellow-50">
                 <div className="text-center flex-col justify-between">
                    <div className="text-4xl pt-2 mb-3 h-2/5">
                        Profesjonalna obsługa
                    </div>
                    <div className="text-xl mb-2 px-2 h-2/5 ">
                        <p>Potrzebna szybka i precyzyjna działalność?
                        Oferujemy najwyższej jakości usługi na rynku!
                        </p>
                    </div>
                  </div>
                    <div className="text-2xl bg-blue-600 h-1/5 flex items-center justify-center ">
                        Skontaktuj się z nami!
                    </div>
                </div>

            </div>
            <div id="right" className=" sm:w-1/12 flex items-center justify-center ">

            </div>
        </div>
    )
}

export default Card