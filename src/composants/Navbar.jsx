import React from 'react'
import '../main.css'
export default function Navbar({nombreLike}) {
  return (
    <div className='entete'>
        <h3>Les posts likes sont:{nombreLike}</h3>
    </div>
  )
}
