import React from 'react'
import { countries } from '../../consts'
import {Button} from '..'
import CountryFlag, { CountryFlagCard } from '../CountryFlag'
import {Hero as heroConsts} from './homepageConsts'
import Image from 'next/image'

import line1 from "src/app/assets/vectorline.svg"
import line2 from "src/app/assets/vectorlinestraight.svg"
import line3 from "src/app/assets/vectorline2.svg"

const Hero = () => {
  const {heroImg,heroCallToActions,heroHeaderParagragh,heroSubtext,heroHeader}=heroConsts
  const heroBgStyle={
    backgroundImage:`url(${(heroImg)})`
  }
  return (
    <main className='hero'>
        <div style={heroBgStyle} alt="" className='bg-cover bg-[80%] bg-tr bg-no-repeat w-full relative pb-[30rem] pt-[10%] flex justify-center '>
            {/* Floating Badges  */}
            
            <div className='floating-badges'>
              <div className='hidden max-md:block absolute bottom-[25%] right-[35%]'>
                <Image src={line1}/>
                <CountryFlagCard cc="bj" className="top-0 translate-x-[-45%] translate-y-[-100%] absolute "/>
              </div>

              <div className='max-md:hidden absolute bottom-[47%] right-[10%] xl:right-[15%]'>
                <Image src={line2}/>
                <CountryFlagCard cc="cd" className="top-0 translate-x-[-45%] translate-y-[-100%] absolute "/>
              </div>

           
          </div>
            <div className='hero-content h-full  m-auto w-[20rem] lg:w-[50rem] text-primary text-center flex flex-col items-center gap-3'> 
                <p className='uppercase text-[.75rem] lg:text-[1.125rem] '>{heroHeaderParagragh}</p>
                <h1 className=' text-4xl lg:text-[5.5625rem] leading-[90%] font-black relative'>
                  {heroHeader}
                  {/* badge */}
                  <div className='max-md:hidden badge absolute -translate-x-full translate-y-full bottom-[30%] left-[2%]'>
                    <Image src={line3}/>
                    <CountryFlagCard cc="bj" className="bottom-0 left-0 translate-x-[-50%] translate-y-[100%] absolute "/>
                  </div>
                </h1>
                <p className='text-sm px-5 max-w-[32rem]'>{heroSubtext}</p>
                <div className='countries flex gap-1'>
                  {countries.map(country=>(
                    <div key={country.code} className='country bg-[#FEF9EC] rounded-full p-[.4rem] flex items-center gap-3'>
                      <CountryFlag  size={2} cc={country.code}/>
                      {country.name==="Guinea"&&<p className=' uppercase'>{country.name}</p>}
                    </div>))}
                </div>

                <div className='countries justify-center lg:flex-row flex-col flex gap-3 w-full'>
                  {heroCallToActions.map(button=>(
                    <Button key={button.text} primary={button.primary} url={button.action} sm> {button.text}</Button>)
                  )}
                </div>
                
            </div>
            
        </div>
    </main>
  )
}

export default Hero