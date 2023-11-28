'use client'

import { useState } from 'react';
import { createNewProduct } from '../action';

export default function Form({
    manufacturers
}: {
    manufacturers: any
}) {
    const [form, setForm] = useState({
        registrationNo: '',
        name: '',
        activeIngredient: '',
        dosageForm: '',
        consumerMedicineInfo: '',
        manufacturerId: 0,
        createManufacturer: false,
    });

    const handleForm = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleBtnCreateManufacturer = () => {
        setForm((prevForm) => ({ ...prevForm, createManufacturer: !prevForm.createManufacturer }));
    }

    return (
        <form action={createNewProduct}>
            <div className="space-y-12 border-b border-gray-900/10 pb-12">
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
                            Product Name
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="name" type="text" value={form.name} required
                                onChange={handleForm} />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Active Ingredient
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="activeIngredient" type="text" value={form.activeIngredient} required
                                onChange={handleForm} />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Dosage Form
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="dosageForm" type="text" value={form.dosageForm} required
                                onChange={handleForm} />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Consumer Medicine Information (Attachment Link)</label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <input className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                name="consumerMedicineInfo" type="text" value={form.consumerMedicineInfo}
                                onChange={handleForm} />
                        </div>
                    </div>
                    {/* user input */}
                    <div className="w-full max-w-sm">
                        <label className="block pb-1 text-sm font-medium text-gray-700">
                            Manufacturer
                            <span className="text-rose-500">*</span></label>
                        <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                            <select name="manufacturerId" className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 capitalize"
                                value={form.manufacturerId} required onChange={handleForm}>
                                <option key="0" value="0">Select Manufacturer</option>
                                {manufacturers.map((manufacturer: any) => (
                                    <option key={manufacturer.id} value={manufacturer.id} className="capitalize">
                                        {manufacturer.info.name.toLowerCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div >
            <div className="flex justify-start space-x-4 pt-6">
                <button type="submit" className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                    Submit
                </button>
            </div>
        </form >
    )
}
