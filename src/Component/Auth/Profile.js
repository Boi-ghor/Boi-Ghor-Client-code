import React, { useEffect, useState } from 'react'

import {toast} from "react-toastify";
import { useAuth } from '../../context/useAuth';
import axios from 'axios';


const Profile = () => {
     
  const [auth, setAuth] = useAuth();
  const [id, setId] = useState("")
     const [firstName, setfirstName] = useState("")
     const [lastName, setlastName] = useState("")
     const [email, setEmail] = useState('')
    //  const [password, setPassword] = useState('')
    //  const [confirmpassword, setconfirmpassword] = useState('')

    
  

  useEffect(() => {
     if (auth?.user) {
       const {_id,firstName, lastName,email } = auth.user;

       setId(_id)
       setfirstName(firstName);
       setlastName(lastName);
      // setPassword(password);
       setEmail(email);
     
     }
   }, [auth?.user]);

   
   
 //console.log(id,firstName, lastName,password,email)
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.put(`/updateProfile/${id}`,
        {
          firstName,lastName,
          email,
         
       });

       if (data?.error) {
         toast.error("update failed");
       } else { 

         setAuth({ ...auth, user:data });
         let setData = localStorage.getItem("auth");
         setData = JSON.parse(setData);
         setData.user = data;
         localStorage.setItem("auth", JSON.stringify(setData));
         toast.success("Profile updated");
       }
     } catch (err) {
       console.log(err);
     }
   }


 

     return (
          <div className="container mx-auto">


               <div className="flex justify-center">
                    <div className="flex flex-col justify-center ">
                         <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg shadow-xl">
                                   <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">

                                        <div className=" md:w-[600px] h-[400px]  overflow-hidden p-[20px]">
                                             <div className="flex flex-col card-body  mt-5">


                                                  <div className="flex flex-col p-3  ">

                                                       <h1 className='text-4xl my-[10px]

                                                             font-bold '>Your  Profile</h1>
                                                      

                                                       

                                                       <form onSubmit={handleSubmit}>
                                                            <div class="grid grid-cols-2 gap-4">

                                                                 <div class="">
                                                                      <label >First Name</label>
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
                                                                                focus:border-[#EA512E]    
                                                                                "
                                                                                value={firstName}
                                                                                onChange={(e) => setfirstName(e.target.value)}
                                                                              
                                                                                type="text"

                                                                           />

                                                                        

                                                                      </div>


                                                                 </div>
                                                                 <div class="">
                                                                      <label >Last Name</label>
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
                                                                                focus:border-[#EA512E]    
                                                                                "
                                                                                value={lastName}
                                                                                onChange={(e) => setlastName(e.target.value)}
                                                                               
                                                                                type="text"

                                                                           />

                                                                        
                                                                      </div>

                                                                 </div>
                                                            </div>


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
                                                                           readOnly={true}

                                                                           value={email}
                                                                           onChange={(e) => setEmail(e.target.value)}
                                                                           
                                                                           type="text" />

                                                                     
                                                                 </div>
                                                            </div>

{/* 
                                                            <div class="grid grid-cols-2 gap-4 mt-[20px]">

                                                                 <div class="">
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
                                                                               
                                                                                type='password'
                                                                           />

                                                                          

                                                                      </div>


                                                                 </div>
                                                                 <div class="">
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
                                                                              
                                                                                type='password'
                                                                           />

                                                                       

                                                                      </div>

                                                                 </div>
                                                            </div> */}




                                                            <div className="flex flex-col  mt-[30px] ">
                                                                 <button
                                                                      className="
                                                                      
     
                                                                      w-28
                                                                 font-semibold
                                                                 bg-[#ff4157] 
                                                                 text-lg
                                                                 
                                                                 hover:bg-[#232323] duration-500 
                                                                 
                                                                 text-white
                                                                 
                                                                 py-3 px-4 "
                                                                      type='submit'
                                                                 >
                                                                      Update</button>

                                                            </div>



                                                            
                                                       </form>



                                                  </div>






                                             </div>





                                        </div>



                                   </div>


                              </div>
                         </div>
                    </div>
               </div>







          </div>

     )
}

export default Profile