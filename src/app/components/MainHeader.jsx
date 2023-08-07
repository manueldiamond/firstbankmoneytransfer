"use client" 

import FirstBankLogo from 'src/app/assets/FirstBank.png';
import {TbX, TbMenu} from 'react-icons/tb'
import {useState} from 'react';
import Button from './Button';
import CountryFlag from './CountryFlag'
import Image from 'next/image';
// Constants for this component
const navLinks=[
    {text:"How it works",url:"/"},
    {text:"Help",url:"/"},
]
const languages=["EN","NG-Pidgin","NG-Hausa","NG-Igbo","NG-Yoruba"]
const loginText="Log in"
const registerText="Register"


const MainHeader = () => {
    const [menu,setMenu]=useState(false)

    return ( 
        
        <div className="navbar w-full h-max">
            <div className={`flex justify-center p-4 w-full transition-all overflow-clip fixed z-50 ${menu?"bg-specialgray h-screen":"h-min bg-white"} lg:bg-white lg:h-auto`}>
                <nav className='flex items-center justify-between w-[90%] flex-col lg:flex-row h-full'>
                    <div className="left-nav flex justify-between items-center w-full lg:w-auto">
                        <Image priority src={FirstBankLogo} alt="logo" />
                        
                        <Button style={{padding:".75rem"}} className='lg:hidden' onClick={()=>setMenu(!menu)}>
                            {menu?<TbX strokeWidth={3} className='w-6 h-6'/>
                                :<TbMenu strokeWidth={3} className='w-6 h-6'/>}
                        </Button>
                    </div>
                   
                    <div className={`${!menu&&"hidden"} right-nav lg:block w-full h-full`}>
                        <ul className='flex lg:justify-end flex-col lg:flex-row h-full gap-4 items-center text-primary '>
                            <div className='flex-1'/>
                            <div className='flex-1'/>
                            {navLinks.map(link=>(
                                <li key={link.text} className='hover-underline w-full lg:w-auto '><a className="block" href={link.url}>{link.text}</a></li>
                            ))}
                            <div className='lg:w-min w-full flex gap-2'>
                               
                                <CountryFlag  cc="NG"/>
                                
                                <select  className="flex-1 text-right bg-transparent outline-none w-[3rem]" defaultValue={languages[0]}>
                                    {languages.map( lang=>
                                        (<option key={lang} name={lang}>{lang}</option>)
                                    )}
                                </select>
                            </div>
                            <div className='flex-1 block lg:hidden'/>
                            <a className='hidden hover-underline lg:block'>{loginText}</a>
                            <div className='lg:flex-row lg:p-0 lg:w-auto flex flex-col lg:flex- w-full text-center gap-3 py-[10%]'>
                                <Button bordered sm className='lg:hidden'>{loginText}</Button>
                                <Button primary sm>{registerText}</Button>
                            </div>
                        </ul>
                    </div>
                </nav>
            
            </div>
        </div>
    
     );
}
 
export default MainHeader;