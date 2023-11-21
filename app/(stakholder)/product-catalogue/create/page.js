'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Page({ params, searchParams }) {
    const [form, setForm] = useState({
        name: "",
        href: "",
        registration_no: "",
        expiry_date: "",
        active_ingredients: "",
        contraindictions: "",
        imageSrc: "",
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
                        <h1 className="text-gray-700 text-2xl font-bold">Add Pharmaceutical Product</h1>
                    </div>

                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p> */}

                    <div className="mt-8 w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Product name
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="text"
                                        name="name"
                                        placeholder=""
                                        value={form.name}
                                        onChange={handleForm}
                                        autoFocus
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Registration No
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="text"
                                        name="registration_no"
                                        placeholder=""
                                        value={form.registration_no}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Supplier
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="text"
                                        name="supplier"
                                        placeholder=""
                                        value={form.supplier}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Expiry Date
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="date"
                                        name="expiry_date"
                                        placeholder=""
                                        value={form.expiry_date}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Active ingredients
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <input
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        type="text"
                                        name="active_ingredients"
                                        placeholder=""
                                        value={form.active_ingredients}
                                        onChange={handleForm}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Indications
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <textarea
                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                        name="indications"
                                        placeholder=""
                                        value={form.indications}
                                        onChange={handleForm}
                                        required
                                        rows="3"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Contraindictions
                                <span className="text-rose-500">*</span></label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
                                    <textarea
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="contraindictions"
                                        placeholder=""
                                        value={form.contraindictions}
                                        onChange={handleForm}
                                        required
                                        rows="3"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200 bg-[url('/medicine-thenounproject.svg')] bg-cover">
                                    <img

                                        className="h-auto w-full object-cover object-center"
                                    />
                                </div>
                                {/* <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                    </svg> */}
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                    <Link href="/product-catalogue">
                        <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset focus:ring-primary-500 hover:bg-primary-600">
                        Add Drug
                    </button>
                </div>
            </form>
        </div >
    );
}