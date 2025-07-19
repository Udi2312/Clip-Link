'use client'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

    const handleChange = ()=>{

    }
  return (
    <div className='mx-auto max-w-lg'>
    <h1>
        Generate your short URLs.
    </h1>
    <div>
        <input type="text" placeholder='Enter your long URL here' onChange={handleChange} />
        <input type="text" placeholder='Enter your prefered short URL text' className='p-4 focus: outline-purple-600' onChange={handleChange} />
        <button>Generate</button>
    </div>
    </div>
  )
}

export default Shorten