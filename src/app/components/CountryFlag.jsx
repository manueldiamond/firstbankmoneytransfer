import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { countries } from '../consts'


const CountryFlag = ({cc="",size=1.5,className, border=2} ) => {
  
  return (
    <div style={{
        width:`${size}rem`,
        height:`${size}rem`,
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

const CountryFlagCard=({cc,className,dark, text })=>{
  const country=countries.find(ctry=>ctry.code.toUpperCase()===cc.toUpperCase())
  !country&&console.error("Cant find country: ",cc)
  
  return(
    <div  className={`py-2 px-4 gap-3  w-max rounded-full ${dark?"bg-gray-700 text-white":"bg-white text-primary"} centered ${bg} ${color} ${className}`}>
      <CountryFlag cc={cc} size={2}/>
      <p className='uppercase font-primary font-medium'>{text?typeof(text)==='function'?text(country):text:country.name}</p>
    </div>
  )
}
export default CountryFlag
export {
    CountryFlagCard
  }