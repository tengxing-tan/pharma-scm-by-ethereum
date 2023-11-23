'use client'

import { useState } from 'react';
import { Heading } from 'app/_ui/heading';
import { createDrugBatch } from '../action';

export default function Page() {
    const [form, setForm] = useState({
        registrationNo: '',
        batchNo: '',
        quantity: 0,
        manufactureDate: '',
        expiryDate: '',
    });

    const handleForm = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none p-6">
            <form action={createDrugBatch}>
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    <Heading heading="Create Order" />

                    {/* form section */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6">
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Registration No.
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="registrationNo" type="text" value={form.registrationNo} required
                                    onChange={handleForm} />
                            </div>
                        </div>
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Batch No.
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="batchNo" type="text" value={form.batchNo} required
                                    onChange={handleForm} />
                            </div>
                        </div>
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Quantity
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="quantity" type="number" step="1" min="1" value={form.quantity} required
                                    onChange={handleForm} />
                            </div>
                        </div>
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Manufacture Date
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="manufactureDate" type="date" value={form.manufactureDate} required
                                    onChange={handleForm} />
                            </div>
                        </div>
                        {/* user input */}
                        <div className="w-full max-w-sm">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Expiry Date
                                <span className="text-rose-500">*</span></label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="expiryDate" type="date" value={form.expiryDate} required
                                    onChange={handleForm} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start space-x-4 pt-6">
                    <button type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
}