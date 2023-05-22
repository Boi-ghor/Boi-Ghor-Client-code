import React from 'react';
import {useAuth} from "../context/useAuth";
import {useCart} from "../context/useCart";
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import NotInCart from "../Component/NotInCart";

const Cart = () => {
    const [auth]=useAuth();
    const{cartItems,removeFromCart,clearCart,increaseQuantity,decreaseQuantity}=useCart();

    const deleteAlert=(id)=>{

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

                if(id){
                    removeFromCart(id)

                }else{
                    clearCart()

                }




            }
        })
    }
    if(cartItems.length <= 0 ){
        return <NotInCart></NotInCart>
    }


    return (
        <div>
            <div className={'min-h-screen w-full flex flex-col items-center justify-start'}>
                <h1 className={'capitalize text-3xl text-blue-500 py-6'}>{`${auth?.user?.firstName ? auth?.user?.firstName :"user"}'s Cart`}</h1>
                <table style={{borderRadius:"20px"}} className="table table-compact w-2/4 my-5 border-solid border-2 border-primary  ">
                    <thead className=''>
                    <tr className='text-center'>

                        <th>BOOK NAME</th>
                        <th>QUANTITY</th>
                        <th>UNIT PRICE</th>
                        <th>TOTAL PRICE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItems.map((cart)=>{
                            return(
                                <tr className={'text-center mb-4'}>
                                    <td>{cart?.bookName}</td>
                                    <td className={''}>  {cart?.cartQuantity} </td>
                                    <td>{cart.price}</td>
                                    <td>{cart.cartQuantity * cart.price}</td>
                                    <td className={'flex justify-center p-2 gap-3 '}>
                                        <AiFillMinusCircle onClick={()=>{decreaseQuantity(cart)}} className={'text-3xl text-green-900 cursor-pointer'}></AiFillMinusCircle>
                                        <MdDelete onClick={()=>{deleteAlert(cart._id)}} className={'text-3xl  text-red-700 rounded-lg cursor-pointer'}></MdDelete>
                                        <AiFillPlusCircle onClick={()=>{increaseQuantity(cart)}}  className={'text-3xl text-blue-500 cursor-pointer'}></AiFillPlusCircle>

                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                    <tfoot>
                    <tr className={'text-center'}>
                        <th colSpan={5}><span onClick={()=>{deleteAlert()}} className={'px-2 btn btn-danger'}>remove all cart</span></th>
                    </tr>
                    </tfoot>

                </table>
                <div> <Link to={'/user/place-order'} className={'btn btn-primary'}>Place Order</Link> </div>
            </div>
        </div>
    );
};

export default Cart;