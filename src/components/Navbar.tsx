import Link from 'next/link'
import React from 'react'
import { WatchIcon } from '../assets/svgs/WatchIcon'

export const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-gray-500 via-slate-400 to-stone-500 w-full h-20 flex justify-center space-x-6 py-4 font-serif font-bold md:space-x-28 md:text-xl md:pt-4 lg:space-x-96 lg:text-2xl'>
      <Link href={'/'} >
        <p className='px-4'>
          <WatchIcon/>
        </p>
      </Link>
      <Link href={'/watchcollection'}>
        <p className='px-8 text-center'>
          Watch collection
        </p>
      </Link>
      <Link href={'/dreamwatches'}>
        <p className='text-center'>
          Dream watches
        </p>
      </Link>
    </div>
  )
}
