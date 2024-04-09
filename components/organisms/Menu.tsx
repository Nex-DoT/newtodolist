"use client"
import React,{useState} from 'react';
import Profile from '../molecules/Profile';
import { LuMenu } from "react-icons/lu";
import IconButton from '../atom/IconButton';
import SearchBar from '../atom/SearchBar';
import ThemeToggleBtn from '../ui/theme-switch';
import MenuTask from '../molecules/MenuTask';
import { DataNameMenu } from '@/lib/MenuDataName';
import ListTask from '../atom/ListTask';
import ListTasks from '../molecules/ListTasks';
import IconTextButton from '../atom/IconTextButton';
import { FaSignOutAlt } from "react-icons/fa";

const Menu = () => {
    const [menu , setMenu] = useState(true)
    const menuHandeler = ()=>{
        setMenu(!menu);
        console.log(menu);
        
    }
    const data = DataNameMenu;
    return (
        <menu className={` h-full w-80 relative flex flex-col items-start justify-between pt-7 transition-all bg-background2 p-6 ${menu ? " translate-x-0" : " -translate-x-80"}`}>
            <div className='w-full'>
                <Profile/>
                <div className={`absolute top-8 right-3  ${menu=== false && "!-right-16"}`}>
                    <IconButton icon={<LuMenu/>} onClick={menuHandeler}/>
                </div>
                <SearchBar/>
                <MenuTask/>
                <hr className=' border-opacity-60 border-primary-200' />
                <ListTasks/>
            </div>
            <div className='w-full'>
                <ThemeToggleBtn/>
                <IconTextButton text='SingOut' icon={<FaSignOutAlt/>} />
            </div>
        </menu>
    );
};

export default Menu;