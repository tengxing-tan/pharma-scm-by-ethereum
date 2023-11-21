'use client'

import { useState, ChangeEvent } from 'react';

type FormState = {
    batchNo: String
    quantity: Number
    manufactureDate: String
    expiryDate: String
};
type SmartContractState = {
    shipTo: String
    originLocation: String
};

export default function Page({
    params: { id },
}: {
    params: { id: string }
}) {

    const [form, setForm] = useState<FormState>({
        batchNo: '',
        quantity: new Number(),
        manufactureDate: '',
        expiryDate: '',
    });
    const [smartContract, setSmartContract] = useState<SmartContractState>({
        shipTo: '',
        originLocation: '',
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm: FormState) => ({ ...prevForm, [name]: value }));
    };
    const handleSmartContract = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSmartContract((prevForm: SmartContractState) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none p-6">
            <form className="px-4" action="POST">
                <div className="flex justify-between">
                    <h1 className="text-gray-800 text-3xl font-bold">Create Order</h1>
                </div>

                <div className="space-y-8 border-b border-gray-900/10 pb-12">
                    <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-4">
                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Registration No
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="registrationNo"
                                    value="Get from Blcokchain"
                                    required autoFocus
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Batch No
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="batchNo"
                                    value={String(form.batchNo)}
                                    onChange={handleForm}
                                    required
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Quantity
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="number"
                                    name="quantity"
                                    value={Number(form.quantity)}
                                    onChange={handleForm}
                                    min={1} step={1000} required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 border-b border-gray-900/10 pb-12">
                    <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-4">
                        <h2 className="text-xl text-gray-700 font-semibold">Product Details</h2>
                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Manufacture Date
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="manufactureDate"
                                    placeholder="MM/YY"
                                    value={String(form.manufactureDate)}
                                    onChange={handleForm}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Expiry Date
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={String(form.expiryDate)}
                                    onChange={handleForm}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 border-b border-gray-900/10 pb-12">
                    <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-4">
                        <h2 className="text-xl text-gray-700 font-semibold">Shipment Details</h2>
                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Company Name (Buyer)
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="shipTo"
                                    value={String(smartContract.shipTo)}
                                    onChange={handleSmartContract}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-lg">
                            <label className="block text-sm font-medium text-gray-900">
                                Origin Location
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 focus:ring-0"
                                    type="text"
                                    name="shipTo"
                                    value={String(smartContract.shipTo)}
                                    onChange={handleSmartContract}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start space-x-4 pt-6">
                    <button
                        type="submit"
                        className="rounded-md bg-primary-500 py-3 px-6 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset focus:ring-primary-500 hover:bg-primary-600">
                        Submit
                    </button>
                </div>
            </form >
        </div >
    );
}