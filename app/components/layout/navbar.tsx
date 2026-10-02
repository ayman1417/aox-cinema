import { Moon } from 'lucide-react'
import React from 'react'
import ThemeToggle from './themeToggle'

export default function Navbar() {
    return (
        <nav className='darK:bg-tertiary  top-4 z-50 w-1/2 fixed  left-1/2 -translate-x-1/2  shadow-sm shadow-primary/30 rounded-xl p-2 px-4  darK:text-amber-50  '>
            <div className="flex justify-between items-center ">
                <h1 className="whitespace-nowrap text-lg font-bold tracking-wide">
                    <span className="dark:text-primary text-primary  ">AOX</span>{" "}
                    <span className="dark:text-white text-tertiary ">Cinema</span>
                </h1>
                <div className="flex justify-between items-center gap-4 text-amber-50" >
                    <h1 className='text-tertiary/90 hover:text-tertiary  font-bold dark:text-amber-50 dark:hover:text-amber-100  cursor-pointer duration-200'>Movies</h1>
                    <h1 className=' text-tertiary/90 hover:text-tertiary  font-bold dark:text-amber-50 dark:hover:text-amber-100 cursor-pointer duration-200'>Shows</h1>
                    <h1 className='text-tertiary/90 hover:text-tertiary  font-bold dark:text-amber-50 dark:hover:text-amber-100 cursor-pointer duration-200'>Tickets</h1>
                </div>
                <div className="flex justify-between items-center gap-4 text-amber-50 ">
                    <button className='p-2 bg-red-600 hover:bg-red-700 duration-200 cursor-pointer   rounded-xl text-sm font-medium'>logout</button>
                    {/* <button className="cursor-pointer rounded-full p-1.5 transition duration-200 hover:bg-white/10"> */}
                        <ThemeToggle />
                    {/* </button> */}
                </div>
            </div>

        </nav>
    )
}
