"use client"
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import IconButton from '../atom/IconButton';
const InputTask = () => {
    const plusHandeler= ()=>{

    }
    return (
        <div className='flex items-center h-16 bg-background2 rounded-md w-full'>
            <IconButton icon={<FaPlus/>} onclick={plusHandeler}/>
            <input className='' type="text" />
        </div>
    );
};

export default InputTask;