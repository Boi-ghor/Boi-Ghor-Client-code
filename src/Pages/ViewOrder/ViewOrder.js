import React, {useEffect, useState} from 'react';

import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {useAuth} from "../../context/useAuth";

const ViewOrder = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [auth]=useAuth();

    const [order,setOrder]=useState({})

    useEffect(()=>{
        if(auth?.token){
            getSingleOrder()
        }
    },[])

    const getSingleOrder=async ()=>{
        try{
            if(auth?.token){

                const URL=`/allOrders/${id}`;

                const {data}=await axios.get(URL);
                setOrder(data.data);
            }
        }
        catch (e) {

        }
    }
    // update order status
    function updateOrder(id,status){
        return Swal.fire({
            title: 'Change Status',
            input: 'select',
            inputOptions: {shipped: 'shipped', delivered: 'delivered',},
            inputValue:status,

        }).then((result)=>{
            axios.put(`/order/${id}`,{orderStatus:result.value})
                .then(data=>{
                    if(data){
                        console.log(data)
                        toast.success("successfully changed order status");
                        window.location.reload(true)
                    }
                })
        })
    }


    // delete order
    function deleteAlert(id){

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/order/${id}`)
                    .then(data=>{

                        toast.success('Order has been deleted')
                        navigate('/dashboard/admin/all-order')

                    })
                    .catch(()=>{
                        toast.error('cannot delete the task')
                    })


            }
        })
    };
    return (
        <div className={'my-12'}>
            <p className={'text-3xl text-center font-bold my-2'}>View Order</p>
            <div className="card grid grid-cols-5 lg:card-side bg-base-100 shadow-xl">
                <div className={'col-span-2 flex justify center'}>
                    <div className="card w-full bg-base-100 shadow-xl  border-2 ">
                        <div className="card-body">
                            <h2 className="card-title">Name: {order.customerName}</h2>
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
                                            order?.bookList?.map((product,index)=>{
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
                                                TotalPrice : {order.totalPrice}
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
                        <p>Email: {order.UserEmail}</p>
                        <p>Contact Number: {order.mobileNumber}</p>
                        <p>Address: {order.address}</p>
                        <p>Payment Status: {order.isPay}</p>
                        <p>Order Create Date : {moment(order.createdAt).format('lll')}</p>
                    </div>
                    <div className="card-actions justify-end">
                        {
                             order.isPay === "unpaid" ?<button onClick={()=>navigate(`/user/checkout/${order._id}/${order.totalPrice}`)} className='btn btn-primary py-1'>checkout</button>  : ""
                        }


                    </div>
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center my-4'}>
                <h1 className={'text-2xl font-bold'}>order status</h1>
                <ul className="steps">
                    <li className={`step ${order.orderStatus === "accepted" ? "step-primary" : ""}`}>Accepted</li>
                    <li className={`step ${order.orderStatus === "processing" ? "step-primary" : ""}`}>Processing</li>
                    <li className={`step ${order.orderStatus === "shipped" ? "step-primary" : ""}`}>Shipped</li>
                    <li className={`step ${order.orderStatus === "delivered" ? "step-primary" : ""}`}>Delivered</li>
                </ul>
            </div>
        </div>
    );
};

export default ViewOrder;