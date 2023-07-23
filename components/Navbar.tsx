import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CustomBtn from './CustomBtn';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <h1 className='text-[24px] text-bolder'>Booking Car! </h1>
                <Image
                    src='/logo.svg'
                    alt='car logo'
                    width={120}
                    height={20}
                    className='object-contain'
                    />
                </Link>

        <CustomBtn
            title='Sign In!'
            btnType ='button'
            containerStyles='text-white font-bold rounded-full bg-primary-blue min-w-[130px]'
        />
        </nav>
    </header>
  )
}

export default Navbar