"use client"
import React,{useState} from 'react'
import { convertCurrency, countries, getCountry, maxWidth } from "../../consts";
import { Button, CountryFlag, PatternBg } from '..';
import {BsFillExclamationCircleFill} from 'react-icons/bs'

const MoneyTransfer = () => {
 
  const [transferCountries, setTransferCountry] = useState({sender:"ng",recipient:'gh'});
 
  const handleCountryChange = (occurence,forWho) => { 
    setTransferCountry(prev=>({...prev, [forWho]:occurence.target.value}));
  };

  const [conversion,setConversion]=useState({})
  const handleAmtChange=event=>{
    setConversion(convertCurrency(event.target.value,transferCountries.sender,transferCountries.recipient))
  }

  return (
    <PatternBg className="max-w-[37.5rem] bg-light-bg border-b-primary-deep border-b-4 border-solid " >
      <div className=" p-5 pt-7 flex flex-col gap-5">
        <div className="bg-primary-lighter p-2 ">
            <p className='text-primary'> Wooah! 🎁 Fully Loaded Bank Transfer Goalie</p>
        </div>
       
        <CountryInputField heading='You send exactly' text='Your country' selectedCountry={transferCountries.sender} onAmtChange={handleAmtChange} onCountryChange={(e)=>handleCountryChange(e,"sender")}/>

        {conversion.amt&&<div className="flex flex-col text-gray">

            <div className='flex justify-between'>
                <p className="font-bold text-black text-right">{conversion.rate}</p>
                <p className="centered text-left underline gap-1">Exchange Rate <span className='text-black'><BsFillExclamationCircleFill className=''/></span></p>
            </div>
            <div className='flex justify-between'>
                <p className="font-bold text-black">{conversion.commission}GBP</p>
                Commission rate
            </div>
            <div className='flex justify-between'>
                <p className="font-bold text-black">{conversion.commission*conversion.rate*100}GBP</p>
                <p className="underline"> When we converted it </p>
            </div>
            
        </div>}
        
        <CountryInputField heading='Recipient receives' text='Recipient’s country' selectedCountry={transferCountries.recipient} 
        amt={conversion.amt}
        onCountryChange={(e)=>handleCountryChange(e,"recipient")}/>
        
        <Button className='mt-2 w-full' text="Start banking" primary sm={maxWidth('md')}/>

      </div>
    </PatternBg>
  )
}

const CountryInputField = ({selectedCountry='ng',heading={}, text="", onAmtChange,onCountryChange, amt,  })=>{
    const disableInput=onAmtChange===undefined
    const inputStyle="px-5 -2 w-full flex  hover:bg-specialgray out bg-white border-1 rounded-xl border-gray-2 p-2"
    
    return(
      <div className='text-xl text-gray-2 flex flex-col gap-4'>
         <p className="text-left mt-2 text-[#545454] text-lg font-medium">
                {heading}
        </p>
         <div className={`${inputStyle} outline-none flex-col border-1 rounded-lg border-gray-2 p-2`}>
            <p className="-ml-2 text-[.6rem] lg:text-[.7rem] text-left">{text}</p>
            <div className='centered bg-inherit'>
                <CountryFlag cc={selectedCountry}  size={2}/>
                <select
                id="country"
                value={selectedCountry}
                onChange={onCountryChange}
                className="bg-inherit text-right bg-none  outline-none outline-0  w-full h-full"
                >
           
              <option value="" disabled></option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
         </div>
         <div className={`${inputStyle} h-16 centered`}>
            <input onChange={onAmtChange} type='number' placeholder='0.00' value={amt} disabled={disableInput} name="amount" className={`${disableInput&&"pointer-events-none"} : bg-inherit flex-1 h-full outline-none outline-0`}/>
          
            <div className='centered'>
                <CountryFlag cc={selectedCountry} size={2}/>
                <span>{getCountry(selectedCountry).currency.code}</span>
            </div>
         </div>
      </div>
    )
  }

export default MoneyTransfer

