"use client"; 

import { Fragment, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter(); 

  // Update the URL search parameters
  const handleUpdateParams = (e: { title: string; value: string }) => {

    const newPath = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPath);
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e); 
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={22} height={22} className='ml-4 object-contain' alt='up-down arrow' />
          </Listbox.Button>
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node element
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
    )
  }

export default CustomFilter