import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className='signin flex items-center justify-center p-5'>
      <Image src={'/assets/fxmax.png'} width={200} height={200}  />

      <div className="flex flex-col gap-5">
        <h1 className='text-white font-bold text-2xl'>Register now to Participate in the Festive Fun</h1>
        <form action="">
          <input type="text" name="username" id="" placeholder="Input a Cool name" className='text-black outline-none rounded p-1 border border-4 border-green-700'/>
        </form>
        <p className='text-white text-sm font-thin'>already registed before ? <Link href='./login'> <span className='font-bold text-green-600'>Log In</span></Link></p>
      </div>
    </div>
  )
}

export default Signin