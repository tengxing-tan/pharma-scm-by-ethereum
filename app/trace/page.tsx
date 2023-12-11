'use client'
import { useState } from "react";
import LoginComponent from "./_component/login-component"
import { Session } from "next-auth";

export default function Page(params: {
    session: Session
}) {
    const [form, setForm] = useState({
        type: "regNo",
        searchKey: "",
    });

    const handleForm = (event: any) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="max-w-none py-32">
            <div className="absolute w-full top-0 left-0 right-0 flex justify-between items-center p-2">
                <div></div>
                <LoginComponent session={params.session} />
            </div>
            <form action="trace/search" method="GET">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-primary-500 font-bold pb-6">Trace Your Medicine</h1>
                    <p className="text-md text-gray-700 block pb-12 max-w-lg text-center">
                        Search and Trace a pharmaceutical product</p>
                    <p className="text-gray-600 text-base p-2 space-x-2">
                        <span>By: </span>
                        <label className={form.type === 'regNo' ? "underline" : ""}><input className="hidden" type="radio" name="type" value="regNo" onClick={handleForm} defaultChecked /> Registration no.</label> /
                        <label className={form.type === 'productName' ? "underline" : ""}><input className="hidden" type="radio" name="type" value="productName" onClick={handleForm} /> Product name</label> /
                        <label className={form.type === 'ingredient' ? "underline" : ""}><input className="hidden" type="radio" name="type" value="ingredient" onClick={handleForm} /> Ingredient</label>
                    </p>
                    <div className="w-full max-w-sm">
                        <div className="w-full flex justify-center border-b-2 border-primary-600 bg-gray-100 p-1 mb-1">
                            <input
                                className="block w-full text-gray-700 border-none bg-transparent px-2 py-1 focus:ring-transparent"
                                type="search" name="searchKey" autoFocus required
                                value={form.searchKey}
                                onChange={handleForm}
                                placeholder={form.type === 'regNo' ? "Registration no. ie MAL11115008AZ" : form.type === 'productName' ? "Product name. ie Ultracet" : "Ingredient. ie Hydrochlorothiazide"} />
                        </div>
                        <button type="submit" className="bg-indigo-500 text-white w-full mt-2 text-base font-bold rounded py-2 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            GO</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
