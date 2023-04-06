import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLock } from 'react-icons/ai';
import { GrUserManager } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi';

const ChangepassComponents = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [email, setEmail] = useState('')

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    
     if (!password) {
         toast.error('password is required');

    } else if (password.length < 6) {
         toast.error('Password must be at least 6 characters')

    }

    else if (!confirmpassword) {
         toast.error('confirmpassword is required');

    } else if (password !== confirmpassword) {
         toast.error('Passwords do not match');
    }

    else {

      console.log(password,confirmpassword)
         toast.success("sign up suces")
    }


}


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-80  bg-base-100 shadow-xl">
        <div className="card-body ">



          <h2 className='text-xl font-bold'>Change Password </h2>


          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-[20px]">

              <label> Email </label>
              <div className="relative">

                <input className="
              w-full
              placeholder: 
             placeholder-[#1b0238]
             text-[15px]
             px-[35px] py-[5px]
            border-b-2
             border-[#1b0238] 
            focus:outline-none 
            focus:placeholder-[#ffff]
            focus:border-[#ff4157]

      "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={true}

                  type="text" />

                <div className="absolute inset-y-0 flex items-center ">
                  <HiOutlineMail
                    size={20}
                  />

                </div>
              </div>
            </div>


            <div class="mt-[10px]">
              <label> Password </label>
              <div className="relative">

                <input className="

                    w-full
                    placeholder: 
                    placeholder-[#1b0238]
                    text-[15px]
                    px-[35px] py-[5px]
                    border-b-2
                    border-[#1b0238] 
                    focus:outline-none 
                    focus:placeholder-[#ffff]
                    focus:border-[#ff4157]

                    "
                                                                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password "
                  type={showPassword ? 'text' : 'password'}
                />

                <div className="absolute inset-y-0 left-0 flex items-center">

                  <AiOutlineLock size={20} />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <AiFillEye
                        color="#1b0238"
                      />
                    ) : (
                      <AiFillEyeInvisible
                        color="#1b0238"
                      />
                    )}
                  </button>


                </div>

              </div>


            </div>

            <div class="mt-[10px]">
              <label>Confirm Password </label>
              <div className="relative">

                <input className="

                  w-full
                  placeholder: 
                  placeholder-[#1b0238]
                  text-[15px]
                  px-[30px] py-[5px]
                  border-b-2
                  border-[#1b0238] 
                  focus:outline-none 
                  focus:placeholder-[#ffff]
                  focus:border-[#ff4157]

                  "
                                                                 
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  placeholder="Confirm Password "
                  type={showPassword ? 'text' : 'password'}
                />

                <div className="absolute inset-y-0 left-0 flex items-center">

                  <AiOutlineLock size={20} />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <AiFillEye
                        color="#1b0238"
                      />
                    ) : (
                      <AiFillEyeInvisible
                        color="#1b0238"
                      />
                    )}
                  </button>


                </div>

              </div>

            </div>


            <button type='submit' className="w-20 content-center mt-5 button py-2 px-4  
            rounded-r-lg bg-[#ff4157]">Submit</button>

          </form>


        </div>
      </div>
    </div>
  )
}

export default ChangepassComponents
