'use client'

import { useState } from 'react';
import { updateDrugBatch } from '../action';
import Link from 'next/link';

export default function Form({
    drugBatch
}: {
    drugBatch: any
}) {

    const batchId = drugBatch?.id
    const batchNo = drugBatch?.batchNo
    const quantity = drugBatch?.quantity
    const manufactureDate = drugBatch?.manufactureDate
    const expiryDate = drugBatch?.expiryDate

    const [form, setForm] = useState({
        batchNo: batchNo,
        quantity: quantity,
        manufactureDate: manufactureDate,
        expiryDate: expiryDate,
    });

    const handleForm = (event: any) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <form action={updateDrugBatch}>
            <div className="space-y-12 border-b border-gray-900/10 pb-12">
                {/* form section */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <input name="batchId" type="hidden" value={batchId && batchId.toString()} />
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
                                name="quantity" type="number" step={1} min={0} value={form.quantity} required
                                onChange={handleForm} />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Date of Manufacture
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="manufactureDate" type="text" value={form.manufactureDate} required
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
                                name="expiryDate" type="text" value={form.expiryDate} required
                                onChange={handleForm} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="flex justify-start space-x-4 pt-6">
                <button
                    type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                    Submit
                </button>
                <Link href="/order">
                    <button
                        type="button" className="bg-gray-50 focus:ring-gray-300 hover:underline rounded-md px-6 py-3 text-sm  text-gray-500 shadow-sm focus:ring-1 focus:ring-inset">
                        Cancel
                    </button></Link>
            </div>
        </form >
    );
}

const SHIPMENT_STATUS = {
    OUT_FOR_DELIVERY: 'Out for delivery',
    IN_TRANSIT: 'In transit',
    ARRIVED_AT_DESTINATION: 'Arrived at destination',
    DELIVERED: 'Delivered',
    DELAYED: 'Delayed',
    HELD_FOR_INSPECTION: 'Held for inspection',
    RETURNED_OR_REJECTED: 'Returned or rejected',
    LOST_OR_DAMAGED: 'Lost or damaged',
}
