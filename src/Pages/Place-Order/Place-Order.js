import React, {useEffect, useState} from 'react';
import {useAuth} from "../../context/useAuth";
import axios from "axios";

import {useCart} from "../../context/useCart";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const PlaceOrder = () => {

    const navigate=useNavigate()
    const [loading,setLoading]=useState()
    const [auth]=useAuth();
    console.log(auth)
    const { cartItems,clearCart } = useCart();
    const [books,setBooks]=useState([])
    const [totalPrice,setTotalPrice]=useState('')
    const [numbers,setNumbers]=useState('')
    const [address,setAddress]=useState('')
console.log(books)
    useEffect(()=>{
        const {books,totalPrice}=getOrderDataFromCart();
        setBooks(books);
        setTotalPrice(totalPrice);
    },[])
    const getOrderDataFromCart = () => {

        let totalPrice = 0;
        const books = cartItems.map((item) => {
            totalPrice += item.price * item.cartQuantity;
            return {
                _id: item._id,
                bookName: item.bookName,
                quantity: item.cartQuantity,
                price: item.price * item.cartQuantity,
            };
        });
        return { books, totalPrice }
    }
    const handleSubmit=async (e) =>{
        e.preventDefault()
        try{
            console.log("aschis")
            if(!numbers || !address) {
                toast.error('fill up number or address box')
            }else{
               setLoading(true)
                const orderPayload={
                    customerName:auth?.user?.firstName,
                    userEmail:auth?.user?.email,
                    mobileNumber:numbers,
                    address:address,
                    bookList:books,
                    totalPrice:totalPrice

                }
                console.log(orderPayload)
                if(auth?.token){
                    console.log("aschi")
                    const {data}= await axios.post('/createOrder',orderPayload);
                    console.log(data)
                    if(data?.success === true){
                        clearCart()
                        toast.success("place order successfully")
                        setLoading(false)

                        navigate('/user/my-order')
                    }else{
                        toast.error('failed to place order');
                       setLoading(false)
                    }
                }else{
                    setLoading(false);
                    toast.error("please login again")
                }
            }
        }
        catch (e) {
            console.log(e)
            toast.error("something wrong")
            setLoading(false)
        }
    }


    return (
        <div className={'h-[70vh] mt-5'}>
            <h1 className={'text-3xl text-center'}>Order Page</h1>
            <div className="card grid grid-cols-5 lg:card-side bg-base-100 shadow-xl">
                <div className={'col-span-2 flex justify center'}>
                    <div className="card w-full bg-base-100 shadow-xl  border-2 ">
                        <div className="card-body">
                            <h2 className="card-title">{auth?.user?.firstName}</h2>
                            <p>
                                <div className="overflow-x-auto">
                                    <table className="table w-full">
                                        {/* head*/}
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            books.map((product,index)=>{
                                                return (
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{product.bookName}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        <tr>
                                            <td className={'text-center'} colSpan={4}>
                                                TotalPrice : {totalPrice}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="card-body border-2 rounded col-span-3">
                    <div className={'flex flex-col gap-4'}>
                        <input onChange={e => setNumbers(e.target.value)} type="text" placeholder="Type Your Mobile number" className="input input-bordered input-primary w-full max-w-xs" />
                        <textarea onChange={e => setAddress(e.target.value)} placeholder="Type Your Address" className="textarea textarea-bordered textarea-primary textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                    <div className="card-actions justify-end">
                        <button disabled={loading} onClick={handleSubmit} className="btn btn-primary">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;