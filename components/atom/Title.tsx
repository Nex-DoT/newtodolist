import React from 'react';
import { TitleType } from '@/types';
const Title = ({text , size}:TitleType) => {
    return (
        <text className={` ${size=== 1 && "text-lg"} ${size=== 2 && " text-base"} ${size=== 3 && " text-sm opacity-80"} ${size===4 && "text-xs opacity-75"}`}>
            {text}
        </text>
    );
};

export default Title;