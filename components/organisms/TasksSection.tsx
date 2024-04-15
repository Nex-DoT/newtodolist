import React from 'react';
import InputTask from '../molecules/InputTask';
import TitleSection from '../molecules/TitleSection';
const TasksSection = () => {
    return (
        <div className=' w-full h-full flex flex-col items-center justify-between'>
            <div className='w-full'>
                <TitleSection/>
            </div>
            <div className='w-full'>
                <InputTask/>
            </div>
        </div>
    );
};

export default TasksSection;