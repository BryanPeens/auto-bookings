// CustomButton.js

import React from 'react';
import { CustomButtonProps } from '../types';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <div>
      <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
          {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <img src={rightIcon} alt='right icon' className='object-contain'/>
          </div>
        )}
      </button>
    </div>
  )
}

export default CustomButton;