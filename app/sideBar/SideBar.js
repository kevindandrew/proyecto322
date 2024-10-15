import React from 'react'
import Image from 'next/Image'

export default function SideBar() {
  return (
    <div>
        <aside className='w-1/4 h-full bg-white'>
            
                <div>
                    <h2 className='font-bold '>
                        Menu
                    </h2>
                    <Image>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

                    </Image>
                </div>
                <div>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                    <Link href='/usuarios'>
                        Usuarios    
                    </Link>
                </div>
            
        </aside>
    </div>
  )
}
