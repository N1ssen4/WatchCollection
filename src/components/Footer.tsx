import { GithubIcon } from 'assets/svgs/GithubIcon'
import { LinkedInIcon } from 'assets/svgs/LinkedInIcon'
import { MailIcon } from 'assets/svgs/MailIcon'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-slate-600 to-black text-white whitespace-pre-wrap text-center py-14 h-screen font-serif'>
        <div className='flex justify-center space-x-12'>
            <a href="https://github.com/N1ssen4">
            <GithubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/mads-rosenlund-nissen-8472371b8/">
            <LinkedInIcon/>
            </a>
            <a href="mailto:mads.rosenlund@hotmail.com">
            <MailIcon/>
            </a>
            
        </div>
        <p className='py-10 whitespace-pre-wrap mx-36'>Developed by Mads Rosenlund Nissen</p>
    </div>
  )
}
