import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit/Firerebase.Init';

const DashboardOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    return (
        <div>
            <p className='text-white text-3xl px-5'>My Orders -- <span className='text-orange-500 font-bold'>{orders.length}</span></p>

            <div class="overflow-x-auto py-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='border text-left'>
                            <th className='border pl-3 text-xl font-semibold'></th>
                            <th className='border pl-3 text-xl font-semibold'>Name</th>
                            <th className='border pl-3 text-xl font-semibold'>Product Name</th>
                            <th className='border pl-3 text-xl font-semibold'>Price</th>
                            <th className='border pl-3 text-xl font-semibold'>Delete</th>
                            <th className='border pl-3 text-xl font-semibold'>Payment</th>
                            <th className='border pl-3 text-xl font-semibold'>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr className='border'>
                                    <th className='border pl-3 p-5'>{index + 1}</th>
                                    <td className='border pl-3 p-5'>{order.name}</td>
                                    <td className='border pl-3 p-5'>{order.productName}</td>
                                    <td className='border pl-3 p-5'>{order.price}</td>
                                    <td className='border pl-3 p-5'><button className='bg-orange-500 p-3 rounded-md hover:bg-black border border-orange-500 duration-500'>Delete</button></td>
                                    <td className='border pl-3 p-5'><button className='bg-orange-500 p-3 rounded-md hover:bg-black border border-orange-500 duration-500'>pay</button></td>
                                    <td className='border pl-3 p-5'>id</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardOrders;