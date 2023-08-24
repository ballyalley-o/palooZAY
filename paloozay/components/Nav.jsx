'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
// components
import Image from 'next/image'
import Logo from '@components/Logo'
// auth
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3 bg-white'>
      <Link href='/' className='flex  gap-2 flex-between'>
        <Logo />
      </Link>
    </nav>
  )
}

export default Nav