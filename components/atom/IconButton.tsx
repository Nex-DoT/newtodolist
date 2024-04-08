import React, { ReactNode } from 'react';
import { Button } from '@nextui-org/button';
interface IconProps {
  icon: ReactNode, // Define the prop type as ReactNode to accept any valid React node
  onClick : () => void //define a function to be called when
}

const IconButton: React.FC<IconProps> = ({ icon , onClick }) => {
  return (
    <div>
      <Button
            onClick={onClick}
            size='lg'
            variant='clear'
            isIconOnly
            
            >{icon}</Button>

    </div>
  );
};

export default IconButton;