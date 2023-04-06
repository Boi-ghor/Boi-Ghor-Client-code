import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const SendotpComponents = () => {

     const [email, setEmail] = useState('')

     const handleSubmit = async (e) => {
          e.preventDefault()

          if (!email) {
               toast.error("Please Enter Your Email")
          }
          else{
               toast.success("6 Digit Otp Send your Email")
               console.log(email)
          }


     }
     return (

          <div className='flex justify-center items-center h-screen'>
               <div className="card card-side bg-base-100 shadow-xl">


                    <div className='First'>
                    <figure ><img src="https://source.unsplash.com/400x400/?computer,login" alt="Movie" /></figure>

                    </div>
                   

                    
                    <div className="card-body">
                         <h2 className="card-title mt-[60px]">
                              Enter Your Email Address</h2>
                         <h5 className='font-medium text-[#cccccc] '>You will receive 6 digit verification code</h5>


                         <form onSubmit={handleSubmit}>
                              <div className="relative mt-[40px]">



                                   <input className="
                                        w-full
                                        placeholder: 
                                        placeholder-[#1b0238]
                                        text-[15px]
                                        px-[35px] py-[5px]
                                        border-b-2  border-[#1b0238] 
                                        focus:outline-none 
                                        focus:placeholder-[#ffff]
                                        focus:border-[#EA512E]
                                        "
                                        value={email}
                                       onChange={(e) => setEmail(e.target.value)}

                                        placeholder="Enter your email address "
                                        type="text" />

                                   <div className="absolute inset-y-0 flex items-center ">
                                        <HiOutlineMail
                                             size={20}
                                        />

                                   </div>
                              </div>

                              <div className="card-actions  mt-4">
                                   <button  type='submit' className="flex button py-2 px-5 rounded-r-lg bg-[#ff4157]">Next

                                   </button>
                              </div>
                         </form>


                         <h6 className='mt-[60px] text-[#b6b3b3]'>Can you remember your password ? <Link className='text-[#ff4157]' to={"/register"}>Sign In</Link></h6>
                    </div>
               </div>
          </div>



     )
}

export default SendotpComponents
