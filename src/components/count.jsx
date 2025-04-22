import React from 'react'
import { useState } from 'react'

export function Count() {
    const [count,setCount] = useState (5)
    const Increase = ()=>{
       setCount(count+1)
    }
    const Decrease =()=>{
        setCount(count-1)
    }

    return (
        <>
            <div className='h-screen flex justify-center items-center'>
                <div className='p-6 bg-black text-white rounded-lg shadow-2xl'>
                    <h1 className='text-center text-3xl font-bold mb-4 uppercase'>Count Project</h1>
                    <p className='text-center'>The value is :{count}</p>
                    <div className='flex space-x-6'>
                        <button onClick={Increase} disabled={count===10}
                         className={`p-2 bg-white text-black font-bold uppercase mt-4 cursor-pointer ${count===10 ? "opacity-50 cursor-not-allowed" :"" }`}>Increase Value</button>
                        <button onClick={Decrease} disabled={count===0}
                         className={`p-2 bg-white text-black font-bold uppercase mt-4 cursor-pointer ${count===0 ? "opacity-50 cursor-not-allowed" :"" }`}>decreacse Value</button>
                    </div>
                </div>
            </div>
        </>
    )
}
