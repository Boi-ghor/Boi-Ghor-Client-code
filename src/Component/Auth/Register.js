import React, {useState} from "react";
import {GrUserManager} from "react-icons/gr";
import {HiOutlineMail} from "react-icons/hi";
import {AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle, AiOutlineLock,} from "react-icons/ai";
import {BsFacebook, BsGithub} from "react-icons/bs";
import {toast} from "react-toastify";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/useAuth";
import axios from "axios";

const RegisterComponents = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading]=useState(false);

    // hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName) {
            toast.error("Name is required");
        } else if (!lastName) {
            toast.error("lastName is required");
        } else if (!email) {
            toast.error("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Invalid email format");
        } else if (!password) {
            toast.error("password is required");
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
        } else if (!confirmpassword) {
            toast.error("Confirm password is required");
        } else if (password !== confirmpassword) {
            toast.error("Passwords do not match");
        } else {
            try {
                setLoading(true)
                const {data} = await axios.post(
                    `https://boi-ghor.onrender.com/api/v1/signup`,
                    {
                        firstName,
                        lastName,
                        email,
                        password,
                    }
                );
                console.log(data);

                if (data?.error) {
                    toast.error(data.error);
                    setLoading(false)
                } else {
                    try {
                        toast.success("registration success")
                        const loginResponse = await axios.post(
                            `https://boi-ghor.onrender.com/api/v1/signin`,
                            {
                                email,
                                password,
                            }
                        );

                        const { data: loginData } = loginResponse;

                        if (loginData?.error) {
                            toast.error(loginData.error);
                            setLoading(false)
                        } else {
                            // User logged in successfully

                            // Store authentication data in local storage
                            localStorage.setItem("auth", JSON.stringify(loginData));

                            // Update the authentication state in your application
                            setAuth({ ...auth, token: loginData.token, user: loginData.user });

                            toast.success("login successfully")
                            setLoading(false)

                            // Redirect the user to the desired authenticated page
                            navigate(
                                location.state ||
                                `/`
                            );
                        }
                    } catch (err) {
                        console.log(err);
                        toast.error("Login failed. Try again.");
                        setLoading(false)
                    }
                }
            } catch (err) {
                console.log(err);
                toast.error("Registration failed. Try again.");
                setLoading(false)
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="flex flex-col justify-center ">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg shadow-xl">
                            <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
                                <div className="First  md:w-[680px] h-[600px] overflow-hidden ">
                                    <img
                                        src="https://source.unsplash.com/700x600/?computer,login"
                                        alt=""
                                        className=""
                                    />
                                </div>

                                <div className="pc Secound absolute md:w-[500px] h-[600px]  overflow-hidden p-[20px]">
                                    <div className="flex flex-col card-body  mt-5">
                                        {loading ? <h1>loading</h1> : ""}
                                        <div className="flex flex-col p-3 pc ">
                                            <h1
                                                className="text-4xl my-[5px]

                                                             font-bold "
                                            >
                                                Register Now
                                            </h1>
                                            <p className="text-sm my-[3px]">
                                                If you already have an account register
                                            </p>

                                            <p className="text-sm mb-5">
                                                You can{" "}
                                                <Link to="/login" className="text-[#ff4157]">
                                                    Login here !
                                                </Link>
                                            </p>

                                            <form onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="">
                                                        <label>First Name</label>
                                                        <div className="relative">
                                                            <input
                                                                className="

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
                                                                placeholder="first name "
                                                                type="text"
                                                            />

                                                            <div className="absolute inset-y-0 flex items-center ">
                                                                <GrUserManager size={20}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <label>Last Name</label>
                                                        <div className="relative">
                                                            <input
                                                                className="

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
                                                                placeholder="last name "
                                                                type="text"
                                                            />

                                                            <div className="absolute inset-y-0 flex items-center ">
                                                                <GrUserManager size={20}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col mt-[20px]">
                                                    <label> Email </label>
                                                    <div className="relative">
                                                        <input
                                                            className="
                                                                  
                                                                  
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
                                                            onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                                            placeholder="Email Address "
                                                            type="text"
                                                        />

                                                        <div className="absolute inset-y-0 flex items-center ">
                                                            <HiOutlineMail size={20}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 mt-[20px]">
                                                    <div className="">
                                                        <label> Password </label>
                                                        <div className="relative">
                                                            <input
                                                                className="
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
                                                                type={showPassword ? "text" : "password"}
                                                            />

                                                            <div
                                                                className="absolute inset-y-0 left-0 flex items-center">
                                                                <AiOutlineLock size={20}/>
                                                            </div>

                                                            <div
                                                                className="absolute inset-y-0 right-0 flex items-center">
                                                                <button
                                                                    type="button"
                                                                    onClick={toggleShowPassword}
                                                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                                >
                                                                    {showPassword ? (
                                                                        <AiFillEye color="#1b0238"/>
                                                                    ) : (
                                                                        <AiFillEyeInvisible color="#1b0238"/>
                                                                    )}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <label>Confirm Password </label>
                                                        <div className="relative">
                                                            <input
                                                                className="
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
                                                                type={showPassword ? "text" : "password"}
                                                            />

                                                            <div
                                                                className="absolute inset-y-0 left-0 flex items-center">
                                                                <AiOutlineLock size={20}/>
                                                            </div>

                                                            <div
                                                                className="absolute inset-y-0 right-0 flex items-center">
                                                                <button

                                                                    type="button"
                                                                    onClick={toggleShowPassword}
                                                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                                >
                                                                    {showPassword ? (
                                                                        <AiFillEye color="#1b0238"/>
                                                                    ) : (
                                                                        <AiFillEyeInvisible color="#1b0238"/>
                                                                    )}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center mt-[30px] ">
                                                    <button
                                                        disabled={loading}
                                                        className="
                                                                      
     
                                                                      w-80
                                                                 font-semibold
                                                                 bg-[#ff4157] 
                                                                 text-lg
                                                                 
                                                                 hover:bg-[#232323] duration-500 
                                                                 
                                                                 text-white
                                                                 
                                                                 py-3 px-4 rounded-full"
                                                        type="submit"
                                                    >
                                                        Register
                                                    </button>
                                                </div>

                                                <div className="flex flex-col  mt-[20px]">
                                                    <p className="text-center"> or continue with</p>

                                                    <div className="flex ">
                                                        <div className="w-1/3 ">
                              <span className="flex flex-col items-end">
                                <BsFacebook/>
                              </span>
                                                        </div>

                                                        <div className="w-1/3">
                              <span className="flex flex-col items-center">
                                <AiFillGoogleCircle/>
                              </span>
                                                        </div>
                                                        <div className="w-1/3">
                              <span className="flex flex-col items-start">
                                <BsGithub/>
                              </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="mobile md:w-4/12 overflow-hidden p-[30px]">
                                    <div className="flex flex-col items-center justify-center mt-5">
                                        <div className="flex flex-col reg">
                                            <h1
                                                className="text-2xl my-[5px]
                                                                       font-bold "
                                            >
                                                Register Now
                                            </h1>
                                            <p className="text-sm my-[3px]">
                                                If you already have an account register
                                            </p>

                                            <p className="text-sm mb-5">
                                                You can{" "}
                                                <Link to="/login" className="text-[#EA512e]">
                                                    Login here !
                                                </Link>
                                            </p>

                                            <div></div>

                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-col">
                                                    <label>First Name</label>
                                                    <div className="relative">
                                                        <input
                                                            className="
          
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
                                                            placeholder="Enter First name "
                                                            type="text"
                                                        />

                                                        <div className="absolute inset-y-0 flex items-center ">
                                                            <GrUserManager size={20}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col  mt-[20px]">
                                                    <label>Last Name</label>
                                                    <div className="relative">
                                                        <input
                                                            className="
          
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
                                                            placeholder="Enter Last name "
                                                            type="text"
                                                        />

                                                        <div className="absolute inset-y-0 flex items-center ">
                                                            <GrUserManager size={20}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col mt-[20px]">
                                                    <label> Email </label>
                                                    <div className="relative">
                                                        <input
                                                            className="
                                                                            
                                                                            
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
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Enter your email address "
                                                            type="text"
                                                        />

                                                        <div className="absolute inset-y-0 flex items-center ">
                                                            <HiOutlineMail size={20}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col mt-[20px]">
                                                    <label> Password </label>
                                                    <div className="relative">
                                                        <input
                                                            className="
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
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="Enter your password "
                                                            type={showPassword ? "text" : "password"}
                                                        />

                                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                                            <AiOutlineLock size={20}/>
                                                        </div>

                                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                                            <button
                                                                type="button"
                                                                onClick={toggleShowPassword}
                                                                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                            >
                                                                {showPassword ? (
                                                                    <AiFillEye color="#1b0238"/>
                                                                ) : (
                                                                    <AiFillEyeInvisible color="#1b0238"/>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col mt-[20px]">
                                                    <label>Confirm Password </label>
                                                    <div className="relative">
                                                        <input
                                                            className="
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
                                                            value={confirmpassword}
                                                            onChange={(e) => setconfirmpassword(e.target.value)}
                                                            placeholder="Confirm your Password "
                                                            type={showPassword ? "text" : "password"}
                                                        />

                                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                                            <AiOutlineLock size={20}/>
                                                        </div>

                                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                                            <button
                                                                type="button"
                                                                onClick={toggleShowPassword}
                                                                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-gray-500 focus:outline-none"
                                                            >
                                                                {showPassword ? (
                                                                    <AiFillEye color="#1b0238"/>
                                                                ) : (
                                                                    <AiFillEyeInvisible color="#1b0238"/>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col  mt-[40px] ">
                                                    <button
                                                        className="
               
                                                                                w-full
              
                                                                                bg-[#EA512e] 
               
                                                                                text-lg
              
                                                                                hover:bg-blue-700
              
                                                                                text-white
               
                                                                                py-2 px-4 rounded-full"

                                                        type='submit'
                                                    >

                                                        Register
                                                    </button>
                                                </div>

                                                <div className="flex flex-col  mt-[20px]">
                                                    <p className="text-center"> or continue with</p>

                                                    <div className="flex ">
                                                        <div className="w-1/3 ">
                              <span className="flex flex-col items-end">
                                <BsFacebook/>
                              </span>
                                                        </div>

                                                        <div className="w-1/3">
                              <span className="flex flex-col items-center">
                                <AiFillGoogleCircle/>
                              </span>
                                                        </div>
                                                        <div className="w-1/3">
                              <span className="flex flex-col items-start">
                                <BsGithub/>
                              </span>
                                                        </div>
                                                    </div>
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
    );
};

export default RegisterComponents;
