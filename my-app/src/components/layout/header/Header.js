import React from 'react'
import Logo from '../../../Logo.png'

function Header() {
    return (
        <nav className='text-gray-600'>
            <div className='grid grid-cols-12 items-center justify-center'>
                <img src={Logo} className='md:col-span-8 lg:col-span-2 text-white text-2xl font-semibold cursor-pointer pl-4 object-scale-down h-28 w-38'/>
                <span className='col-start-3 col-span-3 flex'>
                    <input
                        type="search"
                        class="relative m-0 block min-w-0 flex-auto border-0 border-b border-l border-neutral-600 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                    <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </span>
                <span className='col-start-10'>Link 1</span>
                <span className=''>Link 2</span>
            </div>
        </nav>
    )
}

export default Header