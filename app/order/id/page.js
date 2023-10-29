'use client'

import { useState } from 'react';

const OrderStatus = {
    Pending: "Pending",
    Shipped: "Shipped",
    Received: "Received",
};

const orders = {
    id: "00000001",
    supplier_id: "1",
    supplier_name: "A1 Trading Sdn Bhd",
    buyer_id: "1",
    buyer_name: "Big Pharmacy Sdn Bhd",
    order_date: "20/10/2023",
    delivery_date: null,
    status: "Pending", // Order Status (e.g., Pending, Shipped, Received)
    total_cost: 'RM 3,000',
}

const orderItems = [
    {
        id: 1,
        registration_no: '123456789',
        name: 'Vitamin B2',
        date_of_manufacturer: '20/10/2023',
        quantity: '9000',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
    {
        id: 1,
        registration_no: '123456789',
        name: 'Vitamin B2',
        date_of_manufacturer: '20/10/2023',
        quantity: '9000',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
]

export default function Page({ params, searchParams }) {
    const [form, setForm] = useState({
        shipped_from: "",
        shipped_to: "",
        date: "",
    });

    const handleForm = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none">
            <div className="flex justify-between">
                <h1 className="text-gray-700 text-xl font-bold">
                    Order {orders.id}
                </h1>
            </div>

            <div className="w-full flex flex-col p-6 sm:flex-row items-center sm:space-x-12">
                <div className="flex-1 border-2 border-primary-500/10 rounded-md p-4">
                    <p className="font-semibold text-gray-700 pb-2"><span className="mr-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Supplier</span>
                        {orders.supplier_name}
                    </p>
                    <p>
                        Contact: 02134
                    </p>
                    <p>
                        Address: Selangor
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-initial w-6 h-6 stroke-primary-500 m-4 rotate-90 sm:rotate-0">
                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 border-2 border-green-400/10 rounded-md p-4">
                    <p className="font-semibold text-gray-700 pb-2"><span className="mr-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Buyer</span>
                        {orders.buyer_name}</p>
                    <p>
                        Contact: 02134
                    </p>
                    <p>
                        Address: Selangor
                    </p>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="py-2 flex h-full flex-col bg-white">
                    <h2 className="text-gray-700 text-xl font-bold pb-4">
                        Order Items
                    </h2>
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {orderItems.map((item) => (
                            <li key={item.drug_id} className="flex items-start py-6">
                                <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.imageSrc} className="h-auto w-full object-cover object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Registration no:  <span className="text-gray-700">
                                            {item.registration_no}
                                        </span></p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Date of Manufacturer:  <span className="text-gray-700">
                                            {item.date_of_manufacturer}
                                        </span></p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Quantity:  <span className="text-gray-700">
                                            {item.quantity}
                                        </span></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="py-2 flex h-full flex-col bg-white">
                    <h2 className="text-gray-700 text-xl font-bold pb-4">Update Order Status</h2>
                    <form
                        autoComplete="true"
                        action="https://quest3plus.bpfk.gov.my/pmo2/detail.php"
                        method="GET"
                    >
                        <div className="space-y-6 border-b border-gray-900/10 pb-12">
                            <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Shipped from
                                        <span className="text-rose-500">*</span></label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                            <input
                                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                                type="text"
                                                name="shipped_from"
                                                placeholder=""
                                                value={form.shipped_from}
                                                onChange={handleForm}
                                                autoFocus
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Shipped to
                                        <span className="text-rose-500">*</span></label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                            <input
                                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                                type="text"
                                                name="shipped_to"
                                                placeholder=""
                                                value={form.shipped_to}
                                                onChange={handleForm}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                        <span className="text-rose-500">*</span></label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                            <input
                                                className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                                type="date"
                                                name="date"
                                                value={form.date}
                                                onChange={handleForm}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end py-4">
                            <button
                                type="submit"
                                className="w-full sm:w-fit rounded-md bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset focus:ring-primary-500 hover:bg-primary-600">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
