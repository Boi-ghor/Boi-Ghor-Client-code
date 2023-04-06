import React, { useState } from 'react'
import ReactCodeInput from "react-code-input";
import { toast } from 'react-hot-toast';

const OTPVERI = () => {

  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: '3px',
    height: "45px",
    fontSize: "32px",
    border: '1px solid lightskyblue',
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey"
  }


  const [Otp, SetOtp] = useState("")

  const SubmitOTP = () => {

    if (Otp.length === 6) {
      console.log(Otp)

    }
    else {
      toast.error("Enter 6 DIGIT CODE")
    }
  }



  return (


    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">

          <h2 className='text-xl font-bold'>OTP VERIFICATION </h2>

          <p className='text-[#7e7e7e]'>Please Cheak your email address. </p>
          <ReactCodeInput onChange={(value) => SetOtp(value)} inputStyle={defaultInputStyle} fields={6} />
          <br /> 
          <button onClick={SubmitOTP} className="w-20 content-center button py-2 px-5 rounded-r-lg bg-[#ff4157]">Next</button>
        </div>
      </div>
    </div>


  )
}

export default OTPVERI
