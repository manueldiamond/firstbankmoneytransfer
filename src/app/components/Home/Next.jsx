
import { CountryFlagCard,PatternBg } from "../"
import Image from "next/image";


import Vector3 from "src/app/assets/Vector3.svg";
import Vector5 from "src/app/assets/Vector5.svg";

import MoneyTransfer from "./MoneyTransfer";


//next consts
let bluesideMainText = "Receive MONEY with over 8+ currency globally";

const body =
  "Repeat Your Previous Transfers - Save The Details, And Make Your Monthly Payments Easier.";

const mainText = `SEND MONEY| ACROSS COUNTRIES| NEAR YOU`;


const Next = () => {

  return (
    <div>
      <div className="flex lg:flex-row flex-col min-h-[58rem]">
        
        <PatternBg x={-8} opacity={.05} className="bg-[#031725] text-white w-full h-full centered">
          <div className="pt-6 pl-3 lg:pl-[5rem]">
          <div className="pb-[14rem] max-w-[28rem]">
            <h1 className="text-xl font-black uppercase">{bluesideMainText}</h1>
            <p className="lg:text-[1.125rem] text-sm text-[#CCD8E0]">{body}</p>
          </div>
          <div className="pb-[15rem] ">


            <h1 className="max-w-[35rem] w-fit max-h-[10rem] relative max-md:text-[2.5rem] text-[3.5rem]" >
              {mainText.split("|").map(text=><div className="font-black">{text}</div>)}
              {/* Moved floating card here to properly orient with the text */}
              <div className="w-fit h-fit absolute top-0 left-[8%] -translate-y-full">
              
                <svg width="92" height="149" viewBox="0 0 92 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector 2" d="M92 1H1V149" stroke="currentColor" stroke-dasharray="6 6"/>
                </svg>

                <CountryFlagCard dark  cc="bj"
                  className="top-0 right-0 translate-x-full -translate-y-1/2"
                />
              </div>

              <div className="absolute right-[10%] -translate-y-full top-[2.4rem] lg:top-[3.4rem]">

                <svg width="2" height="148" viewBox="0 0 2 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector 1" d="M1 0V148" stroke="currentColor" stroke-dasharray="6 6"/>
                </svg>

                <CountryFlagCard dark cc="gh" className="top-0 -translate-y-full -translate-x-1/2"/>
              </div>

              <div className="absolute bottom-[1.12rem] translate-y-full left-[50%]" >
                <Image  src={Vector3} />
                <CountryFlagCard dark cc="NG"
                  className="bottom-0 right-0 translate-x-1/2 translate-y-full"
                />
              </div>

              <div className="absolute bottom-0 translate-y-full left-[15%]">
                <Image src={Vector5}  />
                <CountryFlagCard dark cc="cd" text="+6 countries"
                 className="bottom-0 -translate-x-1/3 translate-y-full" />
              </div>
            </h1>

          </div>
          </div>
        </PatternBg>
        <PatternBg opacity={.2} x={-10} className="yellow-side bg-[#E9B937] min-w-[55%] centered h-full"  >
          <div className="absolute top-0 right-0 mix-blend-soft-light -z-10 w-full flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="734" height="283" viewBox="0 0 734 283" fill="none">
            <g>
              <path d="M6.19747 -294.407C77.7386 -167.377 186.233 -15.3127 177.455 139.199C176.38 158.137 163.701 209.702 135.048 216.757C126.571 218.844 116.551 212.322 111.57 205.153C93.4617 179.095 104.691 144.492 120.99 121.65C210.499 -3.79345 410.313 82.4259 516.472 127.323C615.099 169.036 708.478 222.987 800.914 276.743" stroke="#003B65" stroke-width="12" stroke-linecap="round"/>
            </g>
            </svg>
          </div>
          <div className="mainwrapper centered flex-col gap-3 text-center p-10">
            <h1 className="text-lg text-white">
              SEND MONEY ACROSS COUTRIES NEAR YOU
            </h1>
           <MoneyTransfer/>
          </div>
        </PatternBg>
      </div>
    </div>
  );
};

export default Next;


