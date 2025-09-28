"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const[url,seturl]=useState("")
    const[shorturl,setshorturl]=useState("")
    const[generated,setgenerated]=useState(false)

  return (
    <div className='mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-b-lg flex flex-col gap-2'>
      <h1 className='font-bold text-2xl '> 
        Generate your Short URLs.
      </h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
        value={url}
        placeholder='Enter your URL'
        className='p-4 focus:outline-purple-100'
        onChange={(e)=>seturl(e.target.value)}
        />
        <input type="text"
        value={shorturl}
        placeholder='Enter your preferred short url'
        className='px-4 py-2 focus:outline-purple-100'
        onChange={(e)=>setshorturl(e.target.value)}
        />
        <button>Generate</button>
      </div>
    </div>
  )
}

export default page
