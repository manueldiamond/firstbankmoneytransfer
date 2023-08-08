import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { countries, minWidth } from '../consts'


const CountryFlag = ({cc="",size=1.5,className, border=2} ) => {
  const sideStr=`${size}rem`
  return (
    <div style={{
        width:sideStr,
        minWidth:sideStr,
        height:sideStr,
        minHeight:sideStr,
        borderWidth:`${border}px`,
        }} 
        className={`${border?"border-solid border-2 border-white":""} cflag centered overflow-hidden rounded-full ${className}`}>
        <ReactCountryFlag
            style={{
                width:`${size*1.25}rem`,
                height:`${size*2}rem`
                }}
            countryCode={cc.toUpperCase()}
            svg
            className={`max-w-max ${className}`}
        />
    </div>
  )
}

const CountryFlagCard=({cc,className="",dark, text })=>{
  const country=countries.find(ctry=>ctry.code.toUpperCase()===cc.toUpperCase())
  !country&&console.error("Cant find country: ",cc)
  
  return(
    <div  className={`py-1 px-3 gap-2  lg:py-2  text-[.75rem] lg:text-[1rem] lg:px-4  lg:gap-3 absolute  w-max rounded-full ${dark?"bg-[rgba(254,249,236,0.20)] text-white":"bg-white text-primary"} centered ${className}`}>
      <CountryFlag cc={cc} size={minWidth("lg")?2:1.5}/>
      <p className='uppercase font-primary font-medium'>{text?typeof(text)==='function'?text(country):text:country.name}</p>
    </div>
  )
}
export default CountryFlag
export {
    CountryFlagCard
  }