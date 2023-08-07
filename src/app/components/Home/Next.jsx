"use client" 
import { countries, maxWidth } from "../../consts";
import { CountryFlagCard,PatternBg } from "../"
import Image from "next/image";
import {useState } from "react";

import Vector6 from "src/app/assets/Vector6.svg";
import Vector3 from "src/app/assets/Vector3.svg";
import Vector5 from "src/app/assets/Vector5.svg";
import Vector2 from "src/app/assets/vectorline2.svg";
import Vector from "src/app/assets/vectorblueside.svg";
import Vectorstraight from "src/app/assets/vectorlinestraight.svg";


//next consts
let bluesideMainText = "Receive MONEY with over 8+ currency globally";

const body =
  "Repeat Your Previous Transfers - Save The Details, And Make Your Monthly Payments Easier.";

const mainText = `SEND MONEY ACCROSS COUNTRIES NEAR YOU`;
const bgBluePlace = {
  backgroundImage: `url(${Vector})`,
  backgroundRepeat: `contain`,
};

const currencies = [
  { name: "USD", country: "USA" },
  { name: "NGN", country: "Nigeria" },
  { name: "GHS", country: "Ghana" },
  { name: "XAF", country: "Senegal" },
  { name: "XOF" },
  { name: "EUR" },
];
const country = [
  { name: "Zambia" },
  { name: "Ghana" },
  { name: "Benin Republic" },
  { name: "Guinea" },
  { name: "Senegal" },
  { name: "Nigeria" },
  { name: "DR Congo" },
];

const Next = () => {

  const headingStyle = {
    fontSize: maxWidth('md')? "36px" : "60px",
    // Other styles
  };


  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState("")
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Do whatever you want with the selected currency value
    const newExchangeRate = Math.random() * 100;
    setExchangeRate(newExchangeRate)
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (occurence) => {
    setSelectedCountry(occurence.target.value);
  };



  return (
    <div>
      <PatternBg  opacity={.05} className="grid md:flex md:flex-col bg-[#031725] pl-3">
        <div className="pt-6 pl-3 pr-3 text-white w-full md:w-1/2">
          <div className="pb-20">
            <h1 className="text-xl uppercase">{bluesideMainText}</h1>
            <p className="text-sm text-[#CCD8E0]">{body}</p>
          </div>
          <div>
            <div className="">
              <Image src={Vector2}  className="translate-x-8 translate-y-64" />
              <CountryFlagCard
                dark
                cc="bj"
                className="translate-y-20 translate-x-32 "
              />
            </div>
            <div className="">
              <Image
                src={Vectorstraight}
                style={{
                  transform: "translateX(32rem) translateY(9.5rem)", // You can adjust the value (24rem) as needed
                }}
                className=""
              />
              <div
                style={{
                  transform: "translateX(28rem) translateY(-3rem)", // You can adjust the value (24rem) as needed
                }}
              >
                <CountryFlagCard dark cc="gh" />
              </div>
            </div>
            <h1
              className=""
              style={headingStyle}
            >
              {mainText}
            </h1>

            <div className="bottomlayer">
              <div className="">
                <Image
                  src={Vector3}
                  className=""
                  style={{
                    transform: "translateX(18.5rem) translateY(-2.9rem)",
                  }}
                />
                <CountryFlagCard
                  dark
                  cc="NG"
                  className="bg-gray-700 text-white -translate-y-10 translate-x-80"
                />
              </div>
              <div className="">
                <Image
                  src={Vector5}
                  style={{
                    transform: "translateX(4rem) translateY(-13rem)", // You can adjust the value (24rem) as needed
                  }}
                  className=""
                />
                <div
                  style={{
                    transform: "translateX(0rem) translateY(-13rem)", // You can adjust the value (24rem) as needed
                  }}
                >
                  <CountryFlagCard
                    dark
                    cc="cd"
                    text="+6 countries"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="yellow-side bg-[#E9B937] w-full md:w-1/2 justify-items-center justify-center text-center p-10"
          style={{
            backgroundImage: `url(${Vector6})`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          {" "}
          <div className="mainwrapper">
            <h1 className="text-lg text-white">
              SEND MONEY ACROSS COUTRIES NEAR YOU
            </h1>
            <div className="startofwhite bg-white p-5 pt-7">
              <div className="bg-[#CCD8E0] p-2">
                <p>Wooah! 🎁 Fully Loaded Bank Transfer Goalie</p>
              </div>

              <div>
                <p className="text-left text-[#545454] text-lg font-medium">
                  You send exactly
                </p>
                <div className="pb-2">
                  <select
                    id="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="w-full text-right bg-white border-2 rounded-lg border-gray-600 p-2"
                  >
                    <option value="" disabled></option>
                    {countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    id="currency"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    className="w-full p-2 text-right bg-white border-2 rounded-lg border-gray-600 p-2"
                  >
                    <option value="USD" disabled></option>
                    {currencies.map((currency) => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap justify-between">

                      {exchangeRate !== null && (
                        <>
                        <div>
                        <p className="text-right">{exchangeRate}</p>
                        </div>
                        <div>
                        <p className="text-left underline">Exchange Rate </p>
                        </div>
                        {/* <div className="fill-black ">
                        <p className="border-black border-2 text-white  rounded-full ">{String.fromCharCode(0x21)}</p>
                        </div> */}
                        </>
                      )}
              </div>
            </div>
          </div>
        </div>
      </PatternBg>
    </div>
  );
};

export default Next;
