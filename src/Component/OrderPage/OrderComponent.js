import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderComponent = () => {
    const navigate = useNavigate();

    const generateRandomId = () => {
        return Math.random().toString(36).substring(7);
    };

    const generateRandomQuantity = () => {
        return Math.floor(Math.random() * 5) + 1;
    };

    const generateRandomPrice = () => {
        return (Math.random() * 100).toFixed(2);
    };

    const [formData, setFormData] = useState({
        customerName: 'John Doe',
        userEmail: 'john.doe@example.com',
        mobileNumber: '',
        address: '',
        bookList: [
            {
                name: 'Book 1',
                image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                quantity: generateRandomQuantity(),
                price: generateRandomPrice(),
            },
            {
                name: 'Book 2',
                image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
                quantity: generateRandomQuantity(),
                price: generateRandomPrice(),
            },
        ],
        totalPrice: 0,
        isPay: 'unpaid',
        show: true,
        orderStatus: 'accepted',
    });

    useEffect(() => {
        calculateTotalPrice();
    }, [formData.bookList]);

    const handleQuantityChange = (index, value) => {
        const updatedBookList = [...formData.bookList];
        updatedBookList[index].quantity = value;
        setFormData({ ...formData, bookList: updatedBookList });
    };

    const calculateTotalPrice = () => {
        const totalPrice = formData.bookList.reduce((total, book) => {
            return total + book.quantity * book.price;
        }, 0);
        setFormData({ ...formData, totalPrice: totalPrice.toFixed(2) });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('/api/orders', formData);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-6">Checkout Page</h1>
            <div className="space-y-5">
                <div className="form-control">
                    <label className="label">Customer Name:</label>
                    <p>{formData.customerName}</p>
                </div>
                <div className="form-control">
                    <label className="label">User Email:</label>
                    <p>{formData.userEmail}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="mobileNumber" className="label">
                        Mobile Number:
                    </label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="input"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="address" className="label">
                        Address:
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="input textarea"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">Book List:</label>
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>Book</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {formData.bookList.map((book, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-4">
                                        <img src={book.image} alt={book.name} className="w-10 h-10" />
                                        <p>{book.name}</p>
                                    </div>
                                </td>
                                <td>${book.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        value={book.quantity}
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                        className="input w-24"
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="total-price">
                    <p>Total Price: ${formData.totalPrice}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="isPay" className="label">
                        Payment Status:
                    </label>
                    <select
                        id="isPay"
                        name="isPay"
                        value={formData.isPay}
                        onChange={(e) => setFormData({ ...formData, isPay: e.target.value })}
                        className="input"
                    >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary mt-4">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default OrderComponent;
