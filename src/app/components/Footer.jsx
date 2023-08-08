import React from 'react'
import { CountryFlag, PatternBg } from '.'
import firstbanklogo from "src/app/assets/FirstBank.svg"
import Image from 'next/image'

const links={
  "TRANSACTIONS":[
    {text:"send money"},
    {text:"Receive money"},
    {text:"open account"},
    {text:"firstmonie"},
  ],
  "OTHER BANKING":[
    {text:"Download Forms"},
    {text:"Loan Calculator"},
    {text:"Private Banking"},
    {text:"Corporate Information"},
    {text:"Personal Banking"},
    {text:"Business Banking"},
    {text:"Vendor Portal"},
  ],
  "SECURITY":[
    {text:"BVN"},
    {text:"anti-Fraud"},
    {text:"security tips"},
    {text:"secure codes"},
  ],
   "DROP A CONTACT":[
    {text:"Feedback and compliants"},
    {text:"whistleblowing"},
    {text:"find a branch"},
    {text:"contact form"},
    {text:"find an agent"},
    {text:"agent network"},
   ],
   "LEGAL":[
    {text:"sitemap"},
    {text:"terms of use"},
    {text:"privacy policy"},
    {text:"cookie policy"},
   ]

}
const Footer = () => {
  return (
    <footer>
      <PatternBg className="bg-light-bg text-gray centered" >
        <div className='pt-[10rem] px-5 centered pb-[5rem] flex max-md:flex-col gap-24'>
          <Image alt="First Bank Logo" className="self self-start justify-self-start max-w-[11rem]" src={firstbanklogo}/>
          <div className="flex flex-wrap gap-16">
            {Object.keys(links).map(category=>(
              <div className="flex flex-col gap-3 max-md:w-[calc(100%/2-2rem)] ">
                <p className='uppercase'>{category}</p>
                <div className="flex gap-2 flex-col">
                  {links[category].map(link=>(
                    <a className="underline" href={link.url}>{link.text}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="centered w-full gap-5">
            <p className="text-sm">First Bank of Nigeria Limited. An FBNHoldings company.  &copy;{new Date().getFullYear()}</p>
            <div className='flex gap-1'>
              <CountryFlag cc="ng"/>
              EN
            </div>
          </div>                    
        </div>
      </PatternBg>
    </footer>
  )
}

export default Footer