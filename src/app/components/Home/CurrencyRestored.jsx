import React from 'react'
import {TbArrowRight, TbArrowsLeftRight, TbCheck, TbChevronDown, TbExternalLink, TbPointFilled,} from 'react-icons/tb'
import {FaCheckCircle} from 'react-icons/fa'
import {CountryFlag as Flag,Button,PatternBg} from ".."
import { convertCurrency, getCountry,maxWidth,minWidth} from '../../consts'
import { currencyRestoredFinesse as consts} from './homepageConsts'

const getCurrencyCode=cc=>getCountry(cc).currency.code


const CurrencyRestored = () => {
  const upperBadgeText=consts.upperRightText
  const {restored,currencies,features,finesse}=consts
 
  return (
    <section className='currency-restored  text-[1.125rem]' >
      
      <PatternBg x={-1} className='bg-light-bg'>
        <h1 className='uppercase font-black absolute right-3 text-primary text-5xl opacity-[.07] py-4 px-4'>{upperBadgeText}</h1>
        <div className="section-container py-[7rem] px-[1rem] lg:px-[3.5rem] flex flex-col gap-28">
          <div className=" flex lg:flex-row  flex-col justify-between gap-16">
            <div className='lg:max-w-[40rem]  flex flex-col gap-[2.5rem]'>
              <h1 className='text-primary-deep font-black text-[3.5rem] leading-[95%]'>{restored.heading}</h1 >
              <div className='points'>
                {restored.points.map(point=>(
                  <div key={point} className='flex gap-4 py-4'>
                  <TbCheck className='text-black min-w-[2rem] h-[2rem]' strokeWidth={3}/>
                  <p className='text-gray font-[400] text-[1.125rem] '>
                    {point.split(" ").map(
                      word=>
                      (word==="FirstOnlineTransfer"?(
                      <span key={word} className='text-primary'>{word}</span>
                    ):` ${word} `)
                    )}
                  </p>
                  </div>
              ))}
              </div>
              
              <div className="px-12 flex gap-2 max-md:justify-center">
                <a href={restored.link.url} className="w-fit font-black text-dark text-[1.125] font-[700] hover-underline max-md:underline ">{restored.link.text}</a>
                <TbExternalLink strokeWidth={3} className='max-md:hidden w-6 h-6'/>
              </div>
            </div>
            <div className='lg:max-w-[40rem]  flex flex-col gap-[1.5rem]'>
              
              {currencies.converions.map((conv,i)=>(
                
                <div key={i} className='px-5 lg:px-10 py-5 flex bg-[#F4F5F5] rounded-full shadow-normal w-screen'>
                    {conv.map((cc,id)=>(
                    <div key={cc} className='centered gap-3'>
                      <Flag size={minWidth("md")?8:4} border={6} cc={cc}/>
                      <p className='lg:text-[2rem] text-[1.5rem] text-primary'>{getCurrencyCode(cc)}</p>
                      {id===0&&<TbArrowsLeftRight className=' text-primary-deep mx-10 w-6 lg:w-9 h-9'/>}
                    </div>
                    ))}
                </div>
                
              ))}
              <div className="m-auto centered gap-1 text-primary-deep">
                <a  href={currencies.link.url} className="hover-underline font-black">{currencies.link.text}</a>
                <TbChevronDown className='w-6 h-6' strokeWidth={3}/>
              </div>
            </div>     
                                 
          </div>
          <div className=" flex lg:flex-row  gap: flex-col justify-between gap-14">
            {features.map(article=>
            (<article key={article.heading} className='w-full flex flex-col gap-[.63rem]'> 
              <img src={article.img} className='w-14 p-2 bg-white rounded-full shadow-normal' />
              <h5 className="font-black uppercase text-dark">{article.heading}</h5>
              <p className=' mt-[.12rem] text-gray'>{article.body}</p>
            </article>))}
          </div>
          <div className='flex flex-col gap-10 justify-end'>
              <div className='w-full h-fit relative flex'>
                <img className='object-cover lg:min-h-[40rem] w-full' src={finesse.img}/>
                <FloatingTransfer className={`left-[8%]  bottom-[3%]`} transfer={finesse.transfer} />
              </div>
              <div className='flex w-full justify-end'>
                <div className='max-w-[50rem] flex flex-col gap-6'>
                  <h1 className='uppercase text-[2.5rem] text-primary-deeper'>{finesse.heading}</h1>
                  <div className='flex flex-col gap-5'>
                    {finesse.points.map(point=>(
                      <div className="flex gap-3 ">
                        <div className='mt-2 bg-primary-deeper aspect-square h-min rounded-full  w-[0.625rem]'/>
                        <p className='flex-1 text-dark'>{point}</p>
                      </div>

                    ))}
                  </div>
                  <div className="flex gap-5 max-md:mt-4 lg:gap-6 max-md:flex-col  ">
                    {finesse.buttons.map(button=>
                      <Button 
                        {...button} 
                        className='min-w-[18.75rem]'
                        bordered={maxWidth("md")&&!button.primary}
                        primary={maxWidth("md")||button.primary}
                      />)}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </PatternBg>
    </section>
  )
}

export default CurrencyRestored

const FloatingTransfer=({transfer, date=new Date(), className=""})=>{

  return(
    <div className={`w-[20rem] absolute left overflow-hidden rounded-[1rem] rounded-br-none ${className}`} >
      <div className=' text-[0.875rem] bg-white bg-opacity-80 flex flex-col pl-6 pr-10 pt-3 pb-4 gap-3'>
        <div className="flex justify-between">
          <img src='logo.svg' className='h-6'/>
          <span className=' text-[#777777] centered'>Received<TbPointFilled className=' w-[.7rem] mt-1'/>
          {date.getHours()>12?date.getHours()-11:date.getHours()}:{date.getMinutes().toString().padStart(2,0)}
          {date.getHours()>=12?"pm":"am"}</span>
        </div>
        <div className="  text-primary flex items-center justify-between">
          <div className="div items-end gap-1 flex">
            <h6 className=' font-bold text-[1.125rem] '>{transfer.amt}</h6>
            <span className='text-primary-light' >{getCurrencyCode(transfer.from)}</span>
          </div>
          <TbArrowRight strokeWidth={2.5} className='w-5 h-5'/>
          <div className="div items-end gap-1 flex">
            <h6 className=' font-bold text-[1.125rem] '>{
            convertCurrency(transfer.amt,transfer.from,transfer.to).amt}</h6>
            <span className='text-primary-light' >{getCurrencyCode(transfer.to)}</span>
          </div>
        </div>
      </div>
      <div className="bg-primary-deeper px-[1.5rem] py-[1.12rem] text-[0.9375rem]">
        <div className='flex justify-between items-center'>
          <div className="centered gap-1">
            <FaCheckCircle className='text-[#00853F]'/>
            <span className=" text-[#F3F3F3]">Transfer Received</span>
          </div>
          <div className='font-bold text-[#A4A4A4]'>{
          date.getMonth().toString().padStart(2,0)}
          /
          {date.getDate().toString().padStart(2,0)}</div>
        </div>
      </div>
    </div>
  )
}
