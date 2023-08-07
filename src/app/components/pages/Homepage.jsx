"use client"
import React from 'react'
import { CurrencyRestored, Hero, CurrencySection, Next} from '../Home'
import { useResize } from '@/app/consts';

const Homepage = () => {

  useResize();
  return (
    <div className='Homepage'>
        <Hero/>
        <Next/>
        <CurrencyRestored/>
        <CurrencySection/>
    </div>
  )
}

export default Homepage