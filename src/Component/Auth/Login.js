import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./login.module.css";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillGoogleCircle,
  AiOutlineLock,
} from "react-icons/ai";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import axios from "axios";

const LoginComponents = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hook
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/signin`, {
        email,
        password,
      });
      console.log(data);




               if (data?.message) {
                    toast.error(data.message)

               }else if(data?.token) {
                    localStorage.setItem("auth", JSON.stringify(data));
                    setAuth({...auth, token: data.token, user: data.user});
                    toast.success("login success")
                    navigate(
                        location.state ||
                        `/`
                    );
               }
          }
          catch (err) {
               console.log(err);
               toast.error("Login failed. Try again.");
          }}

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mx-auto mobile">
        <div className="flex  justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
                  <div className="Secound md:w-6/12 overflow-hidden p-[30px]">
                    <div className="flex flex-col items-center justify-center mt-5">
                      <div className="flex flex-col ">
                        <h1
                          className="text-2xl my-[5px]
>>>>>>> 4687728c5c1c0147332459a2e70b22d438207c87

                                                  font-bold "
                        >
                          {" "}
                          Sign in
                        </h1>
                        <p className="text-sm my-[3px]">If you don't have an account</p>

                        <p className="text-sm mb-5">
                          You can{" "}
                          <Link to="/register" className="text-[#ff4157]">
                            Registration here !
                          </Link>
                        </p>

                        <div></div>

                        <form onSubmit={handleSubmit}>
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

                                                                 border-b-2  border-[#1b0238]
                                                                 focus:outline-none
                                                                 focus:placeholder-[#ffff]
                                                                 focus:border-[#ff4157]

                                                                 "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address "
                                type="text"
                              />

                              <div className="absolute inset-y-0 flex items-center ">
                                <HiOutlineMail size={20} />
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
                                                                      focus:border-[#ff4157]

                                                                      "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password "
                                type={showPassword ? "text" : "password"}
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
                                    <AiFillEye color="#1b0238" />
                                  ) : (
                                    <AiFillEyeInvisible color="#1b0238" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex mt-[10px] ">
                            <div class="w-2/4 ">
                              <div>
                                <div class="flex items-start">
                                  {" "}
                                  <input
                                    class="border-b  border-stone-400 "
                                    type="checkbox"
                                  />{" "}
                                  <div class="ml-1 text-xs">Remember Me</div>{" "}
                                </div>
                              </div>
                            </div>

                            <div class="w-2/4">
                              <div class="ml-4 flex gf items-end text-xs  hover: text-[#ff4157]">
                                <Link
                                  className="
                                                                       "
                                  to="/forgetpass"
                                >
                                  Forgot password ?
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div
                            className="flex flex-col

                                                            mt-[40px] "
                          >
                            <button
                              className="
                                                                 w-full
                                                                 font-semibold
                                                                 bg-[#ff4157]
                                                                 text-lg

                                                                 hover:bg-[#232323] duration-500

                                                                 text-white

                                                                 py-3 px-4 rounded-full"
                              type="submit"
                            >
                              LOGIN
                            </button>
                          </div>

                          <div className="flex flex-col  mt-[20px]">
                            <p className="text-center"> or continue with</p>

                            <div className="flex ">
                              <div className="w-1/3 ">
                                <span className="flex flex-col items-end">
                                  <BsFacebook />
                                </span>
                              </div>

                              <div className="w-1/3">
                                <span className="flex flex-col items-center">
                                  <AiFillGoogleCircle />
                                </span>
                              </div>
                              <div className="w-1/3">
                                <span className="flex flex-col items-start">
                                  <BsGithub />
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="First md:w-/12 overflow-hidden ">
                    <img
                      src="https://source.unsplash.com/700x600/?computer,login"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center ">
            <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
              <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
                  <div className="pc SecoundPc absolute md:w-[400px] h-[600px]  overflow-hidden p-[20px]">
                    <div className="flex flex-col card-body  mt-5">
                      <div className="flex flex-col p-[20px]">
                        <h1
                          className="text-2xl my-[5px]

font-bold "
                        >
                          {" "}
                          Login Now
                        </h1>
                        <p className="text-sm my-[3px]">If you don't have an account</p>

                        <p className="text-sm mb-5">
                          You can{" "}
                          <Link to="/register" className="text-[#ff4157]">
                            Registration here !
                          </Link>
                        </p>

                        <div></div>

                        <form onSubmit={handleSubmit}>
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

          border-b-2  border-[#1b0238]
          focus:outline-none
          focus:placeholder-[#ffff]
          focus:border-[#ff4157]

          "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address "
                                type="text"
                              />

                              <div className="absolute inset-y-0 flex items-center ">
                                <HiOutlineMail size={20} />
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
               focus:border-[#ff4157]

               "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password "
                                type={showPassword ? "text" : "password"}
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
                                    <AiFillEye color="#1b0238" />
                                  ) : (
                                    <AiFillEyeInvisible color="#1b0238" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex mt-[10px] ">
                            <div class="w-2/4 ">
                              <div>
                                <div class="flex items-start">
                                  {" "}
                                  <input
                                    class="border-b  border-stone-400 "
                                    type="checkbox"
                                  />{" "}
                                  <div class="ml-1 text-xs">Remember Me</div>{" "}
                                </div>
                              </div>
                            </div>

                            <div class="w-2/4">
                              <div class="ml-4 flex gf items-end text-xs  hover: text-[#ff4157]">
                                <Link
                                  className="
                "
                                  to="/forgetpass"
                                >
                                  Forgot password ?
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div
                            className="flex flex-col

     mt-[40px] "
                          >
                            <button
                              className="
          w-full
          font-semibold
          bg-[#ff4157]
          text-lg

          hover:bg-[#232323] duration-500

          text-white

          py-3 px-4 rounded-full"
                              type="submit"
                            >
                              LOGIN
                            </button>
                          </div>

                          <div className="flex flex-col  mt-[20px]">
                            <p className="text-center"> or continue with</p>

                            <div className="flex ">
                              <div className="w-1/3 ">
                                <span className="flex flex-col items-end">
                                  <BsFacebook />
                                </span>
                              </div>

                              <div className="w-1/3">
                                <span className="flex flex-col items-center">
                                  <AiFillGoogleCircle />
                                </span>
                              </div>
                              <div className="w-1/3">
                                <span className="flex flex-col items-start">
                                  <BsGithub />
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="First  md:w-[680px] h-[600px] overflow-hidden ">
                    <img
                      src="https://source.unsplash.com/700x600/?computer,login"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponents;
