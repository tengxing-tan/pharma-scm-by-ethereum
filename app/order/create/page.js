'use client'

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'

const getLastOrderId = () => "12345";

const OrderStatus = {
    Pending: "Pending",
    Shipped: "Shipped",
    Received: "Received",
};

export default function Page({ params, searchParams }) {
    const [selected, setSelected] = useState(OrderStatus.Pending)

    const [form, setForm] = useState({
        id: "",
        buyer: "",
        order_date: "",
        delivery_date: "",
        status: "",
        total_cost: "",
        order_item: [
            {
                item: "",
                date_of_manufacture: "",
                quantity: "",
            },
        ],
    });

    const handleForm = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none">
            <form
                autoComplete="true"
                action="https://quest3plus.bpfk.gov.my/pmo2/detail.php"
                method="GET"
            >
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    <div className="flex justify-between">
                        <h1 className="text-gray-800 text-2xl font-bold">Create Order</h1>
                    </div>

                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p> */}

                    <div className="mt-8 w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Order id
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-500 focus:ring-0"
                                        type="text"
                                        name="id"
                                        value={Number(getLastOrderId()) + 1}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Buyer
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="text"
                                        name="buyer"
                                        placeholder=""
                                        value={form.buyer}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Order date
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="date"
                                        name="order_date"
                                        value={form.order_date}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Delivery date
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="date"
                                        name="delivery_date"
                                        placeholder=""
                                        value={form.delivery_date}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Order status
                                <span className="text-rose-500">*</span></label>
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm">
                                        <span className="block truncate">{selected}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {Object.values(OrderStatus).map((orderStatus, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={orderStatus}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                                            >
                                                                {orderStatus}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 aria-hidden">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                                    </svg>
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>

                    </div>
                </div >

                <div className="flex justify-end space-x-4 pt-6">
                    <Link href="/order">
                        <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset focus:ring-primary-500 hover:bg-primary-600">
                        Create Order
                    </button>
                </div>
            </form >
        </div >
    );
}