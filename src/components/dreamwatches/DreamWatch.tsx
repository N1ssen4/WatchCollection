import { WatchData } from 'assets/WatchData'
import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


export const DreamWatch = () => {

    const slideLeft = () => {
        const slider : any = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        const slider : any = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <>
        <div className='relative flex items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={20}/>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {WatchData.map((watch) =>(
                        <div key={watch.id} className='w-[220px] inline-block p-6 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                        <img  src={watch.img.src}/>
                        <div className='font-serif text-center my-2 '>
                            <p className='whitespace-pre-wrap'>{watch.title}</p>
                            <p className='font-bold'> {watch.price}</p>
                        </div>
                        </div>
                    ))}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={20}/>    
        </div>
    </>
  )
}
