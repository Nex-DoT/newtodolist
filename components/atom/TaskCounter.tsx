import React from 'react';

const TaskCounter = ({task}:any) => {
    return (
        <div className='w-7 h-5 rounded-md bg-primary-300 text-xs text-primary-200 flex items-center justify-center'>
            {task}
            1
        </div>
    );
};

export default TaskCounter;