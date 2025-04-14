"use client"
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import ThemeComp from './ThemeComp'
import Image from 'next/image'
import MenuItem from './MenuItem'

const Header = () => {
  const router = useRouter()
  const [keyword, setKeyword] = React.useState('')

  const searchFunc = (e) => {
    if (e.key === 'Enter' && keyword.length >= 3) {
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/login"
    },
  ]

  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className='bg-amber-600 rounded-lg p-1 font-bold text-2xl cursor-pointer hover:bg-amber-500' onClick={() => router.push('/')}>
        <Image
          src="/logo.jpg"
          alt="Movie App Logo"
          width={50}
          height={15}
          className="object-contain"
        />
      </div>
      <div className='flex-1 flex items-center gap-2 border p-3 rounded-lg'>
        <input 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} 
          onKeyDown={searchFunc}
          placeholder='Search...' 
          className='outline-none flex-1 bg-transparent'
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {
        menu.map((mn, i) => (
          <MenuItem mn={mn} key={i} />
        ))
      }
    </div>
  )
}

export default Header