'use client'

import { useState } from 'react';
import { updateStatus } from '../action';

export default function Form({
    drugBatch
}: {
    drugBatch: any
}) {

    const batchId = drugBatch?.id
    const trackingNo = drugBatch?.shipment?.trackingNo
    const status = drugBatch?.shipment?.status

    const [form, setForm] = useState({
        trackingNo: '',
        status: '',
    });

    const handleForm = (event: any) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <form action={updateStatus}>
            <div className="space-y-12 border-b border-gray-900/10 pb-12">
                {/* form section */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <input name="batchId" type="hidden" value={batchId && batchId.toString()} />
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Tracking No.
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="trackingNo" type="text" value={typeof trackingNo !== 'undefined' ? trackingNo : form.trackingNo} required
                                onChange={handleForm} />
                        </div>
                    </div>

                    <label className="block w-full max-w-sm text-sm font-medium text-gray-700">
                        Status
                        <span className="text-rose-500">*</span>
                        <div className="mt-1 bg-transparent text-gray-900 border rounded-md shadow-sm">
                            <select name="status" className="w-full border-none bg-transparent"
                                onChange={handleForm}>
                                {status && <option value={status}>{SHIPMENT_STATUS[status]}</option>}
                                {
                                    Object.keys(SHIPMENT_STATUS).map((key) => (
                                        <option key={key} value={key}>{SHIPMENT_STATUS[key]}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </label>
                </div>
            </div>
            <div className="flex justify-start space-x-4 pt-6">
                <button
                    type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                    Submit
                </button>
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
