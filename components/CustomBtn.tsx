"use client";

import React from 'react';
import Image from 'next/image';
import { CustomBtnProps } from '@/types';

const CustomBtn = ({title, containerStyles, handleClick, btnType, textStyles}: CustomBtnProps) => {
  return (
    <button 
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>

    </button>
  )
}

export default CustomBtn