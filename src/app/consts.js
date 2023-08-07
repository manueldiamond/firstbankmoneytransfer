"use client"

import {countries as Countries,currencies as Currencies} from 'country-data-list';
import { useEffect, useState } from 'react';

const screenSizes={
    lg:1024,
    md:768,
}

const minWidth=size=>window.innerWidth>=screenSizes[size]
const maxWidth=size=>window.innerWidth<=screenSizes[size]

// custom hook to force window.innerWidth to update
const useResize=()=>{
    const [size,setSize]=useState(0)
    useEffect(()=>{ 
        const resizeFunc=()=>setSize(window.innerWidth)
        addEventListener("resize",resizeFunc)
        return ()=>removeEventListener("resize",resizeFunc)
    },[])
}

// placeholder for currencyconversion API 
const convertCurrency=(amt,fromCc,toCc)=>(amt*(.015)).toFixed(2);

// returns all necessary country data
const getCountry=cc=>{
    const countryInfo = Countries[cc.toUpperCase()]
    const countryCurrency = Currencies[countryInfo.currencies[0]]
    
    return({
        name:countryInfo.name,
        currency:{
            code: countryCurrency.code,
            name: countryCurrency.name,
        }
        
    })
}


const countries=[
    {name:"Zambia", code:"zm", },
    {name:"Ghana", code:"gh", },
    {name:"Benin Republic", code:"bj" },
    {name:"Guinea", code:"gn"},
    {name:"Senegal", code:"sn"},
    {name:"Nigeria", code:"ng",},
    {name:"Dr Congo", code:"cd"},
]


export {
    countries,
    screenSizes,minWidth,maxWidth,
    getCountry,
    useResize,
    convertCurrency,
}