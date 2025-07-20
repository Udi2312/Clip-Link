'use client'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
    <h1 className='font-bold text-2xl'>
        Generate your short URLs.
    </h1>
    <div className='flex flex-col gap-2'>
        <input 
        type="text"
        value={url}
        placeholder='Enter your long URL here'
        className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
        onChange={e =>{seturl(e.target.value)}} />

        <input 
        type="text" 
        value={shorturl} 
        placeholder='Enter your prefered short URL text' 
        className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white' 
        onChange={e =>{setshorturl(e.target.value)}} />

        <button  className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white my-3'>Generate</button>
    </div>
    </div>
  )
}

export default Shorten