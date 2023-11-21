'use client'

import detectEthereumProvider from "@metamask/detect-provider";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    type FormState = {
        email: string;
        publicKey: string;
    }

    const [form, setForm] = useState({
        email: '',
        publicKey: '',
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm: FormState) => ({ ...prevForm, [name]: value }));
    };

    // Connect MetaMask
    const [hasProvider, setHasProvider] = useState<boolean | null>(null);
    const initialState = { accounts: [] };
    const [wallet, setWallet] = useState(initialState);

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));
        };

        getProvider();
    }, []);

    const updateWallet = async (accounts: any) => {
        setWallet({ accounts });
    };

    const handleConnect = async () => {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            updateWallet(accounts);
        }
    };

    return (
        <div className="max-w-none px-4">
            {/* form start here, with border-bottom */}
            <form>
                <div className="space-y-10 border-b border-gray-900/10 pb-12">
                    {/* page title: heading 1. with a button (optionall) at the right */}
                    <div className="flex justify-between">
                        <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
                            Admin Login</h1>
                    </div>

                    {/* body */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6 place-content-center">
                        <div className="w-full max-w-lg">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Email
                                <span className="text-rose-500">*</span>
                            </label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                                    name="email" type="email" required autoFocus
                                    value={form.email}
                                    onChange={handleForm}
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-lg">
                            <label className="block pb-1 text-sm font-medium text-gray-700">
                                Metamask Account
                                <span className="text-rose-500">*</span>
                            </label>
                            <div className="focus-within:ring-primary-500 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset lg:max-w-md">
                                <input
                                    className="block flex-1 border-0 bg-transparent p-2 text-gray-700 placeholder:text-gray-400 focus:ring-0"
                                    type="text"
                                    name="publicKey"
                                    value={
                                        wallet.accounts.length > 0 ? String(wallet.accounts[0]) : ''
                                    }
                                    onChange={handleForm}
                                    required
                                />
                                {hasProvider ? (
                                    wallet.accounts.length <= 0 ? (
                                        <button
                                            type="button"
                                            className="rounded-e-md bg-sky-500 p-3 text-sm font-semibold text-white hover:bg-sky-600 focus:bg-sky-700"
                                            onClick={handleConnect}
                                        >
                                            Connect MetaMask
                                        </button>
                                    ) : (
                                        <span className="inline-flex items-center p-2 text-sm font-semibold text-green-500">
                                            Connected
                                        </span>
                                    )
                                ) : (
                                    <Link href="https://metamask.io/download/" target="_blank">
                                        <button
                                            type="button"
                                            className="rounded-e-md bg-sky-500 p-3 text-sm font-semibold text-white hover:bg-sky-600 focus:bg-sky-700"
                                        >
                                            Download Metamask
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start space-x-4 pt-6">
                    <button
                        type="submit"
                        className="bg-primary-500 focus:ring-primary-500 hover:bg-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus:ring-1 focus:ring-inset">
                        Login</button>
                </div>
            </form>
        </div>
    )
}