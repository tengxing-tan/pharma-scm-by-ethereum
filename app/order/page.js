'use client'

import Link from 'next/link';

const OrderStatus = {
    Pending: "Pending",
    Shipped: "Shipped",
    Received: "Received",
};

const orders = [
    {
        id: "00000001",
        supplier_id: "1",
        supplier_name: "A1 Trading Sdn Bhd",
        buyer_id: "1",
        buyer_name: "Big Pharmacy Sdn Bhd",
        order_date: "20/10/2023",
        delivery_date: null,
        status: "Pending", // Order Status (e.g., Pending, Shipped, Received)
        total_cost: 'RM 3,000',
    },
    {
        id: "00000001",
        supplier_id: "1",
        supplier_name: "A1 Trading Sdn Bhd",
        buyer_id: "1",
        buyer_name: "Big Pharmacy Sdn Bhd",
        order_date: "20/10/2023",
        delivery_date: null,
        status: "Pending", // Order Status (e.g., Pending, Shipped, Received)
        total_cost: 'RM 3,000',
    },
]

export default function Page({ params, searchParams }) {
    return (
        <div className="max-w-none">
            <div className="flex justify-between">
                <h1 className="text-gray-700 text-2xl font-bold">Order</h1>
                <div className="self-start">
                    <Link href="/order/create">
                        <button
                            onClick={null}
                            className="whitespace-nowrap bg-indigo-500 text-white font-semibold rounded-lg px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-8 py-2 flex h-full flex-col bg-white">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {orders.map((order) => (
                        <li key={order.id} className="flex items-start py-6">
                            <div className="ml-4 flex flex-1 flex-col">
                                <Link href="order/id"
                                    className="">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3 className="text-gray-700">{order.supplier_name}<span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                {order.status}
                                            </span></h3>
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">Order date:  <span className="text-gray-700">
                                            {order.order_date}
                                        </span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

