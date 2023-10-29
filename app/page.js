'use client'
// `app/page.js` is the UI for the `/` URL
import { useState } from "react";

export default function Page() {
    const [form, setForm] = useState({
        type: "product",
        id: "",
    });

    const handleForm = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none py-36">
            <form
                autoComplete="false"
                action="https://quest3plus.bpfk.gov.my/pmo2/detail.php"
                method="GET"
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-primary-500 font-bold pb-6">DrugSafe SCM</h1>
                    <label className="text-md text-gray-700 block pb-2 max-w-lg text-center">
                        Trace a pharmaceutical product with just its registration number
                    </label>
                    <div className="w-fit flex justify-center border border-gray-200 rounded p-1 max-w-md">
                        <input className="hidden" name="type" value="product" readOnly />
                        <input
                            className="inline-block text-gray-700 border-none px-2 py-1 focus:ring-transparent"
                            type="search"
                            name="id"
                            placeholder="Search"
                            value={form.id}
                            onChange={handleForm}
                            autoFocus
                            required
                        />
                        <button type="submit" className="bg-indigo-500 text-white font-bold rounded px-4 py-1 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                    </div>
                    <p className={form.id.length < 5
                        ? "text-rose-500 text-sm"
                        : "text-green-500 text-sm"}>
                        Enter at least 5 characters.
                    </p>
                </div>
            </form>
        </div>
    );
}
