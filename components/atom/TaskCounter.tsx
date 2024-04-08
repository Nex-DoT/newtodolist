import React from 'react';

const TaskCounter = ({task}:any) => {
    return (
        <div className='w-8 h-5 rounded-md bg-primary-300 '>
            {task}
        </div>
    );
};

export default TaskCounter;