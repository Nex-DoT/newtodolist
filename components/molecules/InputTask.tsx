"use client"
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import IconButton from '../atom/IconButton';
import IconTextButton from '../atom/IconTextButton';
import { LuAlarmClock } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import Calander from '../atom/Calander';
import { useState } from 'react';
import { ClockType } from '@/types';
const InputTask = () => {
  const [clock, setClock] = useState({
    isOpen: false,
    Time: "12:00"
  })
    const plusHandeler= ()=>{

    }
    const clockHandeler = ( {type , e}:ClockType )=>{
      if(type === 'toggel') setClock({...clock , isOpen: !clock.isOpen })
      if(type === 'Time') setClock({...clock , Time:"12:00" })
    }
    return (
        <div className='flex items-center h-16 bg-background2 rounded-md w-full ml-4 mb-4'>
            <div className='flex items-center w-5/6' >
                <IconButton icon={<FaPlus/>} onclick={plusHandeler}/>
                <input className=' bg-background2 outline-none w-2/4' type="text" />
            </div>
            <div className='w-2/5 flex items-center relative'>
                <IconTextButton text='Today' icon={<FaTasks/>} />
                <Calander/>
                <IconButton icon={<LuAlarmClock/>} onclick={plusHandeler}/>
            </div>
        </div>
    );
};

export default InputTask;