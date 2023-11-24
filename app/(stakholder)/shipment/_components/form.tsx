'use client'

import { useState } from 'react';
import { updateStatus } from '../action';
import { SHIPMENT_STATUS } from 'lib/enum';

export default function Form({
    shipment
}: {
    shipment: any
}) {

    const shipmentId = shipment && shipment.id
    const status = shipment && shipment.status

    const [form, setForm] = useState({
        status: '',
    });

    const handleForm = (event: any) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <form action>
            {/* <div className="space-y-12 border-b border-gray-900/10 pb-12"> */}
            <div className="space-y-12">
                {/* form section */}
                <div className="mt-8 grid w-full grid-cols-1 gap-6">
                    <input name="shipmentId" type="hidden" value={shipmentId && shipmentId.toString()} />
                    {/* user input */}
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
                    Update Status
                </button>
            </div>
        </form >
    );
}
