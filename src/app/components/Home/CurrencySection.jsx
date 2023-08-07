import React from 'react'
import PatternBg from '../PatternBg'
import { getCountry } from '../../consts'
import CountryFlag from '../CountryFlag'
import { currencies } from './homepageConsts'

const CurrencySection = () => {
  const {familiar,available,soon}=currencies
  return (
    <section className=''>
      <PatternBg bgScale={8} x={-2} y={-10} className=" bg-light-bg">
        <div className="p-[4.5rem] ">
          <div className='text-center centered flex-col gap-5'>
            <h1 className='max-w-[51.25rem] text-primary-deeper font-black text-[1.5rem] lg:text-[2.5rem]'>{familiar.heading}</h1>
            <p className="max-w-[43.4375rem] text-[#545454]">{familiar.subHeading}</p>
          </div>
          <div className="countries flex flex-wrap gap-4 text-primary text-xl">
            {familiar.countries.map(cc=><Country soon={soon.includes(cc)} className='w-[calc(100%/2-1rem)] lg:w-[calc(100%/4-1rem)]' cc={cc} />)}
          </div>
          <div className='flex  mt-[6rem] lg:uppercase w-full justify-between max-lg:flex-col gap-5'>
            <h1 className='max-w-[51.25rem] text-primary-deeper font-black text-[1.5rem] lg:text-[2.5rem]'>{available.heading}</h1>
            <p className="max-w-[43.4375rem] text-[#545454]">{available.subHeading}</p>
          </div>
          <div className="countries flex flex-wrap gap-4 text-primary text-xl ">
            {available.countries.map(cc=><Country min soon={soon.includes(cc)} className='w-[calc(100%/2-1rem)] lg:w-[calc(100%/4-1rem)]' cc={cc} />)}
          </div>
        </div>
      </PatternBg>
     
    </section>
  )
}

export default CurrencySection 


const Country=({cc="ng",className="", min=false, soon=false})=>{
  const country=getCountry(cc)
  return(
    <div className={ `my-8 flex gap-3 ${!min&&"flex-col"}  ${className}`}>
      <CountryFlag size={3.5} cc={cc}/>
      <div className=" mt-2 flex gap-3 items-center">
          <p className={`${min&&"underline"} text-xl uppercase`}>{country.name}</p>
          {soon&&<span className='text-gray bg-[#FCD116] px-3 py-1 rounded-full '>SOON</span>}
      </div>
      {!min&&<p className="font-black">{country.currency.name}</p>}
    </div>
  )
}